import {Hands} from '@mediapipe/hands';
// perform the hand detection here in the web worker
// importScripts('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js');
// importScripts('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hand_landmark_full.tflite');
self.onmessage = (e) => {
  //console.log(e.data);
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
  // image from camera needs to be flipped before being fed to the model
  const flipHorizontal = true;
  hands.setOptions({flipHorizontal: flipHorizontal});

  // start the worker
  hands.onResults(gothands);
  hands.send({image: e.data});

  function gothands(results) {
    //console.log(results);
    self.postMessage(results);
  }
}

