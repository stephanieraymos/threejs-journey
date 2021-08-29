// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1); // Params are size
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material); // Creating mesh from geometry and material
scene.add(mesh);

//Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera (point of view) * You can have multiple cameras
// Perspective Camera: If object is far; it will be small, if close; it will be big

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); //1. Field of view (deg, vertical), 2. Aspect ratio
scene.add(camera);
