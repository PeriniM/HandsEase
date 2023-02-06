
// need to import tfjs before handpose to avoid error using importScripts

async function runDetection() {
const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
runtime: "mediapipe",
modelType: "full",
solutionPath: "./mediapipe/hands/",
maxNumHands: 2,
minDetectionConfidence: 0.8,
minTrackingConfidence: 0.8,
flipHorizontal: true,
};
const detector = await handPoseDetection.createDetector(model, detectorConfig);

self.onmessage = async function (e) {
const video = e.data;
while (true) {
const hands = await detector.estimateHands(video);
self.postMessage(hands);
await tf.nextFrame();
}
};
}

runDetection();