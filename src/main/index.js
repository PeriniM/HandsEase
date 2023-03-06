import '../styles/main.css';
import {Hands} from '@mediapipe/hands';
import {Camera} from '@mediapipe/camera_utils';

window.detections = {};

// const worker = new Worker(new URL('../web-workers/detection-worker.js', import.meta.url));
// worker.onmessage = (e) => {
//     //console.log(e.data);
// };


// create a video element
const videoElement = document.createElement('video');
videoElement.setAttribute('id', 'webcam');
videoElement.setAttribute('autoplay', '');
videoElement.setAttribute('muted', '');
videoElement.setAttribute('playsinline', '');
videoElement.width = 640;
videoElement.height = 480;
document.body.appendChild(videoElement);

function gotHands(results) {
    window.detections = results;
    //console.log(results);
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  //selfieMode: true,
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.8,
  minTrackingConfidence: 0.5
});
hands.onResults(gotHands);
// image from camera needs to be flipped before being fed to the model
const flipHorizontal = true;
hands.setOptions({flipHorizontal: flipHorizontal});
const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: video2canvas(videoElement)});
  },
  width: 640,
  height: 480
});
camera.start();

function video2canvas(videoElement) {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.width;
    canvas.height = videoElement.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return imageData;
}

