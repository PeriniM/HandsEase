let detections = {};

const videoElement = document.getElementsByClassName('input_video')[0];

function gotHands(results) {
    detections = results;
    console.log(detections);
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
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
    await hands.send({image: videoElement});
  },
  width: 640,
  height: 480
});
camera.start();