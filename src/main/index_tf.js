window.detections = {};
// create a video element
const video = document.createElement('video');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('playsinline', '');
video.width = 640;
video.height = 480;
document.body.appendChild(video);

import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '../styles/main.css';

async function run() {
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
      runtime: "mediapipe",
      modelType: "full",
      solutionPath: "./mediapipe/hands/",
    };
    const detector = await handPoseDetection.createDetector(model, detectorConfig);
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.srcObject = stream;
    });
    video.addEventListener("play", async function() {
      while (true) {
        const hands = await detector.estimateHands(video);
        //console.log(hands);
        window.detections = hands;
        await tf.nextFrame();
      }
    });
  }
  run();

