import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');

window.detections = {};
// create a video element
const detectors = {handDetector: null, objectDetector: null, pauseAll: false};
const videoElement = document.createElement('video');
videoElement.setAttribute('autoplay', '');
videoElement.setAttribute('muted', '');
videoElement.setAttribute('playsinline', '');
videoElement.width = 640;
videoElement.height = 480;
document.body.appendChild(videoElement);

async function Init() {
    await CreateHandDetector();
}

while(true) {
     await DetectObjects();
     /* At this point, I've got the hands data successfully */
}

export async function CreateHandDetector() {
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
        runtime: 'mediapipe',
        solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
        modelType: 'lite'
    };

    // Dies here. Error:
    // TypeError: t.Hands is not a constructor    hand-pose-detection:17:2509
    detectors.handDetector = await handPoseDetection.createDetector(model, detectorConfig);

    console.log("Hand detector made"); // Never printed
}
