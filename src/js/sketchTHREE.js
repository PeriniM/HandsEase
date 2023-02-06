import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js'
import { Line2, LineGeometry, LineMaterial } from 'three-fatline';
const {KalmanFilter} = require('kalman-filter');
let scene, camera, renderer, controls, points;

let init = function () {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //color the background
  scene.background = new THREE.Color('#00524E');
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

  // add light
  let light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

};

// when the thumb and index finger are close together, draw a line similar to a brush stroke
let drawLine = function (point1, point2) {
  // use fatline to draw a line between the two points
  let lineGeometry = new LineGeometry();
  lineGeometry.setPositions([point1.x, point1.y, point1.z, point2.x, point2.y, point2.z]);
  let lineMaterial = new LineMaterial({
    color: 0xffffff,
    linewidth: 5, // in pixels
    resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    dashed: false
  });
  let line = new Line2(lineGeometry, lineMaterial);
  line.computeLineDistances();
  line.scale.set(1, 1, 1);
  // change background color proportional to distance between points
  let distance = point1.distanceTo(point2);
  let color = new THREE.Color('#00524E');
  // transition from blue to red
  color.setHSL(0.5, 1, 0.5 - distance / 1000);
  scene.background = color;
  scene.add(line);
  points.push(line);

  // when the distance between the points is small, draw a sphere and keep it in the scene withut clearing it
  if (distance < 30) {
    console.log("Distance is small");
  }
  
};


let draw = function () {
  requestAnimationFrame(draw);
  if (detections.length ==0) {
    // if there are no hands detected, clear the scene
    for (let i = 0; i < points.length; i++) {
      scene.remove(points[i]);
    }
    points = [];
    renderer.render(scene, camera);
    return;
  }
  let thumb_right = 0;
  let index_right = 0;
  for (let i = 0; i < detections.length; i++) {
    let hand = detections[i].keypoints;
    let hand_id = detections[i].handedness;
    //console.log(detections);
    
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
      let z = point.z;

      if (point.name == "thumb_tip" && hand_id == "Left") {
        thumb_right = new THREE.Vector3(x, y, z);
      }
      if (point.name == "index_finger_tip" && hand_id == "Left") {
        index_right = new THREE.Vector3(x, y, z);
      }
      if (thumb_right != 0 && index_right != 0) {
        drawLine(thumb_right, index_right);
      }

      let geometry = new THREE.SphereGeometry(10, 20, 20);
      if (hand_id == "Left") {
        var material = new THREE.MeshStandardMaterial({ color: '#FCD5DB'});
      } else {
        var material = new THREE.MeshStandardMaterial({ color: '#ffe1a8'});
      }
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

//resize the canvas when the window is resized
window.addEventListener('resize', function () {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

init();
draw();
