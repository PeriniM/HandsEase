# Drawing App
Using your hands to interact with a 3d environment, where you can draw, create 3d elements and so on. You can then export the files

### INSTALL
- Install first the modules using: 
```
npm install
```
- To run it in a local web server use:
```
npm run start
```
- If you just want to build it use:
```
npm build
```

### TO-DO
- Folders organization: https://mapstore2.readthedocs.io/en/new_merge_doc/developer-guide/project-structure/
#### DETECTION MODEL 
- [ ] Use tensorflowjs model
  - https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection
  - https://machinelearningknowledge.ai/tensorflow-js-hand-gesture-recognition-and-tracking-using-handpose-model/
- [ ] Move the computation to a parallel "thread" using Web Workers (working only on tfjs models)
  - https://stackoverflow.com/questions/64249599/how-to-run-handpose-tfjs-model-in-web-worker
  - https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/
- [ ] Implement Linear Kalman Filter
  - https://ethz.ch/content/dam/ethz/special-interest/baug/igp/photogrammetry-remote-sensing-dam/documents/pdf/Student_Theses/BA_Laumer-Gumgumcu_final.pdf
  - https://nbviewer.org/github/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/00-Preface.ipynb
- [ ] Implement gesture detection model

#### GRAPHICS
- [ ] Port the app in threejs
- [ ] Add 3D Gizmo
- [ ] Add grid floor
- [ ] Add a mockup for the rig of the hands (like transparent hands 3d model)

#### INTERACTION
- [ ] "OK" gesture should pick things and also draw
- [ ] Implement rotation and pan with the other hand
- [ ] Double "OK" gesture allow the user to rotate and scale objects

### Completed Column ✓
- [x] Completed task title  
