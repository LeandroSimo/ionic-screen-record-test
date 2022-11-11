import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

var canvas: HTMLCanvasElement | null;
var context: CanvasRenderingContext2D | null | undefined;
var recordBtn: HTMLButtonElement | null;

let recording = false;
let mediaRecorder: MediaRecorder;
let recordedChunks: BlobPart[] | undefined;

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Documento: ", document)
//   canvas = document.querySelector("canvas");
//   context  = canvas?.getContext("2d");
//   recordBtn = document.querySelector("button");
//   init()
//   draw()
// });

setTimeout(() => {
  canvas = document.querySelector("canvas");
  context = canvas?.getContext("2d");
  recordBtn = document.querySelector("button");
  init();
  draw();
}, 2000);

async function recordScreen() {
  return await navigator.mediaDevices.getDisplayMedia({
    audio: false,
    video: true,
  });
}
function init() {
  recordBtn!.addEventListener("click", async () => {
    console.log("Entrando na função");
    recording = !recording;
    if (recording) {
      recordBtn!.textContent = "Stop";
      const stream = canvas?.captureStream(25);
      mediaRecorder = new MediaRecorder(stream!, {
        mimeType: "video/webm",
        // ignoreMutedMedia: true
      });
      recordedChunks = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          recordedChunks?.push(e.data);
        }
      };
      mediaRecorder.start();
    } else {
      recordBtn!.textContent = "Record";
      mediaRecorder.stop();
      setTimeout(async () => {
        const blob = new Blob(recordedChunks, {
          type: "video/webm",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        console.log("Salvando a aplicação");
        a.href = url;
        a.download = "recording.webm";
        a.click();
        // CONVERTENDO O BLOB PARA BASE64
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async function () {
          var base64data = reader.result?.toString();
          console.log(base64data);
          // DOWNLOAD DO ARQUIVO
          await Filesystem.writeFile({
            path: "Download/video.webm",
            data: base64data!,
            directory: Directory.ExternalStorage,
            recursive: true,
          });
        };
        document.body.removeChild(a);
        // URL.revokeObjectURL(url);
      }, 0);
    }
  });
}

//Canvas animation to rotate colors
var hue = 0;

function draw() {
  hue += 1;
  if (hue > 359) {
    hue = 0;
  }

  if (context !== undefined) {
    context?.clearRect(0, 0, 50, 50);
    context!.fillStyle = `hsl(${hue}, 100%, 50%)`;
    context?.fillRect(0, 0, 50, 50);
  }

  setTimeout(() => {
    draw();
  }, 20);

  // requestAnimationFrame(draw);
}

// requestAnimationFrame(draw);
// draw();

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
        <br />
        <canvas height="50" width="50"></canvas>
        <br />
        <button>Record</button>
      </p>
    </div>
  );
};

export default ExploreContainer;
