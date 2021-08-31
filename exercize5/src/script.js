import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0.7, -0.6, 1) // Setting x, y and z shorthand
scene.add(mesh)

mesh.scale.set(2, 0.5, 0.5)

mesh.rotation.reorder("YXZ")
mesh.rotation.x = Math.PI / 4
mesh.rotation.y = Math.PI
mesh.rotation.z = Math.PI / 2

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)