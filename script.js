// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1); // Params are size
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
