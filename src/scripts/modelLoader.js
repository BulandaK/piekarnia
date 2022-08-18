import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function loadModel(pathToModel, scene) {
  const gltfLoader = new GLTFLoader();
  let model;
  gltfLoader.load(pathToModel, function (gltf) {
    model = gltf.scene;
    scene.add(model);
  });
  return model;
}

export default loadModel;
