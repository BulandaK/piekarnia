import * as THREE from "three";
import wallTexture from "../../static/textures/wall.png";

function makeWall(width, height) {
  const textureLoader = new THREE.TextureLoader();
  const geometry = new THREE.PlaneGeometry(width, height);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map: textureLoader.load(wallTexture),
  });
  const plane = new THREE.Mesh(geometry, material);
  //   plane.rotation.x = -0.5 * Math.PI;
  //   plane.position.set(4, 0, 2.5);
  return plane;
}

export default makeWall;
