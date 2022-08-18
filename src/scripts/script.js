import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import makeFloor from "./floor";
import loadModel from "./modelLoader";
import makeWall from "./wall";

const renderer = new THREE.WebGLRenderer();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// camera.lookAt(3.8410126183788833, 0.6721791642898335, 5.232829155463622);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(10);
scene.add(gridHelper);

// const gltfLoader = new GLTFLoader();
// gltfLoader.load("./assets/table/scene.gltf", function (gltf) {
//   const model = gltf.scene;
//   scene.add(model);
// });

const table = loadModel("./assets/table/scene.gltf", scene);

const wall1 = makeWall(8, 4);
wall1.position.set(4, 2, 0);
scene.add(wall1);
const wall2 = makeWall(5, 4);
wall2.rotation.y = 0.5 * Math.PI;
wall2.position.set(0, 2, 2.5);
scene.add(wall2);

const floor = makeFloor(8, 5);
scene.add(floor);

// const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(3, 1, 4.5);
// controls.update();
// camera.lookAt(3, 1, 0);

function animate() {
  renderer.render(scene, camera);
  if (table) {
    console.log(table);
  }
  // console.log(camera.position);
}

renderer.setAnimationLoop(animate);
