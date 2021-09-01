import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Time: Date.now() returns Milliseconds since Jan 1970

let time = Date.now();

// animations
const tick = () => {
  // Current ime
  const currentTime = Date.now();
  const deltaTime = currentTime - time; // Getting difference
  time = currentTime; // Updating time for next tick

  //Update Objects
  mesh.rotation.y += 0.001 * deltaTime;
  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
  // 60 Ticks per second if computer is at 60 FPS
};

tick();
