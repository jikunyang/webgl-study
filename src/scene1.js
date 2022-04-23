//canvas
const canvas = document.querySelector('.webgl-cube')

//scene
const scene = new THREE.Scene();

//white ring
const ringGeo = new THREE.TorusGeometry(2, 0.2, 16, 100);
const ringMat = new THREE.MeshBasicMaterial({
    color:'#FFFFFF',
    side: THREE.DoubleSide
})
const ring = new THREE.Mesh(ringGeo, ringMat);
scene.add(ring);

// blue cube
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#0000ff'
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

//size
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

//camera
const camera = new THREE.PerspectiveCamera(45, size.width / size.height);
camera.position.x = -2
camera.position.y = 1.5
camera.position.z = 10
scene.add(camera)



//renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)



