import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js'
let scene, camera, renderer, controls, points;

let init = function () {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);

  points = [];

  camera.position.z = 500;

  //insert stats
  let stats = new Stats();
  document.body.appendChild(stats.dom);
  requestAnimationFrame(function loop() {
    stats.update();
    requestAnimationFrame(loop);
  });
};

let draw = function () {
  requestAnimationFrame(draw);
  if (!detections) {
    console.log("no detections");
    return;
  }

  for (let i = 0; i < detections.length; i++) {
    let hand = detections[i].keypoints;
    console.log(hand);
    for (let j = 0; j < hand.length; j++) {
      let point = hand[j];
      // scale the points from camera size to screen size
      point.x = (point.x / 640) * window.innerWidth;
      point.y = (point.y / 480) * window.innerHeight;
      // move the points to the center of the screen
      point.x = point.x - window.innerWidth / 2;
      point.y = point.y - window.innerHeight / 2;
      let x = - point.x;
      let y = - point.y;
      let z = 0;

      let geometry = new THREE.SphereGeometry(10, 32, 20);
      let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      let sphere = new THREE.Mesh(geometry, material);

      sphere.position.set(x, y, z);

      scene.add(sphere);
      points.push(sphere);
    }
  }

  renderer.render(scene, camera);
  // clear points
    for (let i = 0; i < points.length; i++) {
        scene.remove(points[i]);
        }
    points = [];
    
};

init();
draw();
