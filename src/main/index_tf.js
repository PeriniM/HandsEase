import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '../styles/main.css';

window.detections = {};
// create a video element
const video = document.createElement('video');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('playsinline', '');
video.width = 640;
video.height = 480;
document.body.appendChild(video);

async function run() {
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
  
    const detectorConfig = {
      runtime: "mediapipe",
      modelType: "full",
      solutionPath: "./mediapipe/hands/",
      maxNumHands: 2,
      minDetectionConfidence: 0.8,
      minTrackingConfidence: 0.8,
    };
    
    const detector = await handPoseDetection.createDetector(model, detectorConfig);
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.srcObject = stream;
    });
    video.addEventListener("play", async function() {
      while (true) {
        const hands = await detector.estimateHands(video);
        window.detections = hands;
        //console.log(detections);
        await tf.nextFrame();
      }
    });
  }
  run();
  
video2canvas(video);
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
