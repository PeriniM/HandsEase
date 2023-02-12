import * as THREE from 'three';
import { Line2, LineGeometry, LineMaterial } from 'three-fatline';

// create a hand class
export class Hand {
    constructor(hand_id, webcam_width, webcam_height) {
      this.hand_id = hand_id;
      this.webcam_width = webcam_width;
      this.webcam_height = webcam_height;
    }
    getCorrectHand() {
      let hands = window.detections;
      for (let i = 0; i < hands.length; i++) {
        if (hands[i].handedness == this.hand_id) {
          return hands[i];
        }
      }
    }
      
    getCoordinates(landmark) {
      let correctHand = this.getCorrectHand();
      let hand = correctHand.keypoints;
      let point_z;
      let finger;
      let hand_three = [];
      for (let i = 0; i < hand.length; i++) {
        // scale the points from camera size to screen size
        hand[i].x = (hand[i].x / this.webcam_width) * window.innerWidth;
        hand[i].y = (hand[i].y / this.webcam_height) * window.innerHeight;
        
        point_z = 0; // Math.abs(correctHand.keypoints3D[i].z)*1000;

        // move the points to the center of the screen
        hand[i].x = window.innerWidth / 2 - hand[i].x;
        hand[i].y = window.innerHeight / 2 - hand[i].y;

        if (landmark == 'all') {
            hand_three.push(new THREE.Vector3(hand[i].x, hand[i].y, point_z));
        }
        if (hand[i].name == landmark) {
          finger = new THREE.Vector3(hand[i].x, hand[i].y, point_z);
        }
      }

      if (landmark == 'all') {
        return hand_three;
      } else {
        return finger;
      }
    }
  
    render2D(mode, color, thickness) {
        if (mode == 'spheres'){
            // create a group to contain the spheres
            let spheres = new THREE.Group();
            let hand_coord = this.getCoordinates('all');
            for (let i = 0; i < hand_coord.length; i++) {
              let geometry = new THREE.SphereGeometry(thickness, 20, 20);
              let material = new THREE.MeshStandardMaterial({ color: color});
              let sphere = new THREE.Mesh(geometry, material);
              sphere.position.set(hand_coord[i].x, hand_coord[i].y, hand_coord[i].z);
              spheres.add(sphere);
            }
            return spheres;
        }
    }
  }
  
  // create a shape class to contain the points of the shape
  class Shape {
    constructor() {
      this.points = [];
    }
  
    addPoint(point) {
      this.points.push(point);
    }
  
    getPoints() {
      return this.points;
    }
  }
  

let distPoints = function (point1, point2, threshold) {

  // calculate the distance between the points
  let distance = point1.distanceTo(point2);

  // when the distance between the points is small, return true
  if (distance < threshold) {
    // distance is small
    return true;
  }else{
    return false;
  }
};