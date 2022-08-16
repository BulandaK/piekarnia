import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const renderer = new THREE.WebGLRenderer();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(10);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(5, 5, 10);
controls.update();

function animate() {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
