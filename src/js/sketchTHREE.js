import * as THREE from 'three';
import {Hand, distPoints} from './utils.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js'
import { Line2, LineGeometry, LineMaterial } from 'three-fatline';

// get width and height of the video element
let webcam_width = document.getElementById('webcam').width;
let webcam_height = document.getElementById('webcam').height;
let scene, camera, renderer, controls;
let left = "Right", right = "Left";
let leftHand, rightHand;
let thumb_left, index_left, thumb_right, index_right;
let render_right, render_left;


let init = function () {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //color the background
  scene.background = new THREE.Color('#00524E');
  renderer = new THREE.WebGLRenderer({
    canvas: drawing_canvas,
    antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  controls = new OrbitControls(camera, renderer.domElement);

  camera.position.z = 500;

  leftHand = new Hand(left, webcam_width, webcam_height);
  rightHand = new Hand(right, webcam_width, webcam_height);

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



let draw = function () {
  requestAnimationFrame(draw);

  if (detections.length == 0) {
    // no hands are detected

    scene.remove(render_right);
    scene.remove(render_left);

  }
  else {
    // hands are detected
    
    for (let i = 0; i < detections.length; i++) {
      if (detections[i].handedness == right) {
        // thumb_right = rightHand.getCoordinates("thumb_tip");
        // index_right = rightHand.getCoordinates("index_finger_tip");
        render_right = rightHand.render2D('spheres', '#FCD5DB', 10);
        scene.add(render_right);

        // if (distPoints(thumb_right, index_right, 50)) {
        //   console.log("Right hand is drawing");
        //   // draw a sphere at the point
        //   let geometry = new THREE.SphereGeometry(10, 32, 32);
        //   let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        //   let sphere = new THREE.Mesh(geometry, material);
        //   sphere.position.set(index_right.x, index_right.y, index_right.z);
        //   scene.add(sphere);
        // }

      }
      else if (detections[i].handedness == left) {
        // thumb_left = leftHand.getCoordinates("thumb_tip");
        // index_left = leftHand.getCoordinates("index_finger_tip");
        render_left = leftHand.render2D('spheres', '#FCD5DB', 10);
        scene.add(render_left);
        
      }
    }
  }
  

  renderer.render(scene, camera);
  scene.remove(render_right);
  scene.remove(render_left);
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


