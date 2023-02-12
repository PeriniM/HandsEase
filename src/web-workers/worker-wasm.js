import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";


// WebAssembly.compileStreaming(fetch("../mediapipe/hands/hands_solution_simd_wasm_bin.wasm")).then((mod) => {
//     const imports = WebAssembly.Module.imports(mod);
//     console.log(imports);
//     const exports = WebAssembly.Module.exports(mod);
//     console.log(exports);
//     console.log(mod);
//   });

async function runDetection() {
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
        runtime: "mediapipe",
        modelType: "full",
        solutionPath: "../mediapipe/hands/",
        maxNumHands: 2,
        minDetectionConfidence: 0.8,
        minTrackingConfidence: 0.5,
        flipHorizontal: true,
    };
    const detector = await handPoseDetection.createDetector(model, detectorConfig);

    self.onmessage = async function (e) {
        const video = e.data;
        console.log(video);
        while (true) {
            const hands = await detector.estimateHands(video);
            self.postMessage(hands);
            await tf.nextFrame();
        }
    };
}

runDetection();
