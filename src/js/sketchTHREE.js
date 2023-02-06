import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'stats.js'
// create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

// create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 5 );

// create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// create a light
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 5, 5, 5 );
scene.add( light );

// create a camera controller
const controls = new OrbitControls( camera, renderer.domElement );

// resize the renderer when the window is resized
window.addEventListener( 'resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}, false );

// show frame rate
const stats = new Stats();
document.body.appendChild( stats.dom );


function animate() {
    
    requestAnimationFrame( animate );
    stats.update();
    controls.update();
    renderer.render( scene, camera );
}
animate();
