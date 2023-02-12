import '../styles/main.css';
import {Hands} from '@mediapipe/hands';
import {Camera} from '@mediapipe/camera_utils';

window.detections = {};

const worker = new Worker(new URL('../web-workers/worker-wasm.js', import.meta.url), {type: 'module'});
worker.onmessage = (e) => {
    console.log(e.data);
};


// create a video element
const videoElement = document.createElement('video');
videoElement.setAttribute('autoplay', '');
videoElement.setAttribute('muted', '');
videoElement.setAttribute('playsinline', '');
videoElement.width = 640;
videoElement.height = 480;
document.body.appendChild(videoElement);

const camera = new Camera(videoElement, {
  onFrame: async () => {

    // send image data to the worker
    worker.postMessage(video2canvas(videoElement));
  },
  width: 640,
  height: 480
});
camera.start();



function video2canvas(video) {
    const canvas = document.createElement('canvas');
    canvas.width = video.width;
    canvas.height = video.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.width, video.height);
    let imageData = ctx.getImageData(0, 0, video.width, video.height);
    //console.log(imageData);
    return imageData;
}