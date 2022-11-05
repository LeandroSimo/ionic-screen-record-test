import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';



const Tab1: React.FC = () => {

// let start = document.getElementById('start'),
//     stop  = document.getElementById('stop'),
//     mediaRecorder: MediaRecorder;

// start?.addEventListener('click', async function(){
//     let stream = await recordScreen();
//     let mimeType = 'video/webm';
//     mediaRecorder = createRecorder(stream, mimeType);
//   let node = document.createElement("p");
//     node.textContent = "Started recording";
//     document.body.appendChild(node);
// })

// stop?.addEventListener('click', function(){
//     mediaRecorder.stop();
//     let node = document.createElement("p");
//     node.textContent = "Stopped recording";
//     document.body.appendChild(node);
// })

// async function recordScreen() {
//     return await navigator.mediaDevices.getDisplayMedia({
//         audio: false, 
//         video: true
//     });
// }

// function createRecorder (stream: MediaStream, mimeType: string) {
//   // the stream data is stored in this array
//   let recordedChunks: Blob[] = []; 

//   const mediaRecorder = new MediaRecorder(stream);

//   mediaRecorder.ondataavailable = function (e) {
//     if (e.data.size > 0) {
//       recordedChunks.push(e.data);
//     }  
//   };
//   mediaRecorder.onstop = function () {
//      saveFile(recordedChunks);
//      recordedChunks = [];
//   };
//   mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
//   return mediaRecorder;
// }

// function saveFile(recordedChunks: any[] | undefined){

//    const blob = new Blob(recordedChunks, {
//       type: 'video/webm'
//     });
//     let filename = window.prompt('Enter file name'),
//         downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(blob);
//     downloadLink.download = `${filename}.webm`;

//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     URL.revokeObjectURL(blob.type); // clear from memory
//     document.body.removeChild(downloadLink);
// }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton >
          <IonLabel>Start</IonLabel>
        </IonButton>
        <IonButton >
          <IonLabel>Stop</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
function useState(arg0: null): [any, any] {
  throw new Error('Function not implemented.');
}

function useRef(arg0: null) {
  throw new Error('Function not implemented.');
}

function invokeSaveAsDialog(blob: any) {
  throw new Error('Function not implemented.');
}

function useEffect(arg0: () => void, arg1: any[]) {
  throw new Error('Function not implemented.');
}

