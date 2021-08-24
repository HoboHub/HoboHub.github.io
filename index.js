import * as THREE from './lib/three.module.js'

// import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js'
import {GLTFLoader} from './lib/GLTFLoader.js'
import { OrbitControls } from './lib/OrbitControls.js'
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from 'https://cdn.jsdelivr.net/npm/three@0.114/examples/jsm/loaders/RGBELoader.js';

//canvas
const canvas = document.querySelector('canvas.webgl')

//scene
const scene = new THREE.Scene()

// FBX Loader
    // const loader = new FBXLoader()
    // loader.setPath('./assets/blackhole_fbx/source')
    // loader.load('f4f6765107c64d0bb4c474a92a72bdc9.fbx.fbx', (fbx) => {
    //     // c.castShadow = true;
    // });
//

//GLTF Loader
const loader = new GLTFLoader()

const clock2 = new THREE.Clock()

let mixer

var blackhole

loader.load('./assets/blackhole/scene.gltf', (gltf) => {
    blackhole = gltf.scene
    blackhole.children[0].rotation.y += -0.25
    blackhole.children[0].position.x = 60; //50
    // const blackhole = gltf.scene
    mixer = new THREE.AnimationMixer(blackhole) // animation line #1
    mixer.timeScale = 0.1 // set speed of animation
    mixer.clipAction(gltf.animations[0]).play() // anim line #2
    blackhole.scale.set(0.01, 0.01, 0.01)
    //add to scene
    scene.add(blackhole) //-----
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log('Error found')
})


////background loader

// var geometry  = new THREE.SphereGeometry(90, 32, 32)
// create the material, using a texture of startfield
// var material  = new THREE.MeshBasicMaterial()
// material.map   = THREE.ImageUtils.TextureLoader('./assets/starmap_g4k.png')
// material.map   = THREE.ImageUtils.loadTexture('./assets/starmap_g4k.png')
// material.side  = THREE.BackSide
// create the mesh based on geometry and material
// var mesh  = new THREE.Mesh(geometry, material)

//----
// const loaderBG = new THREE.CubeTextureLoader();
// const texture = loaderBG.load([
//     './assets/nebula_bg/nebula-xneg.png',
//     './assets/nebula_bg/nebula-xpos.png',
//     './assets/nebula_bg/nebula-yneg.png',
//     './assets/nebula_bg/nebula-ypos.png',
//     './assets/nebula_bg/nebula-zneg.png',
//     './assets/nebula_bg/nebula-zpos.png',
// ]);
// texture.fog = new THREE.Fog(0x000000, 1, 1)
// scene.background = texture;
//---

// scene.background = new THREE.Color(0x00000, 0);
// scene.fog = new THREE.ExponentialSquaredFog( 0x000000, 1 );

// scene.fog = new THREE.FogExp2(0xffffff, 0.12) //--

// scene.fog = new THREE.Fog(0xffffff, 1, 8) //fog of the object

// object.material.opacity = 0.5;
// //------------------------------


//Light
const light = new THREE.DirectionalLight(0x000000, 0.05)
// const light = new THREE.DirectionalLight(0xffffff, 0.05)
light.position.set(2,2,1) //2,2,5 //5 0 1
scene.add(light)
// scene.add(light2)


//object
// const geometry = new THREE.BoxGeometry(1,1,1)
// //material
// const material = new THREE.MeshBasicMaterial({
//     color: 'green'
// })
// //Mesh
// const box = new THREE.Mesh(geometry, material)
// scene.add(box)


//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//--

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0 //0
camera.position.y = 0.5 //0.2
camera.position.z = 2.5 //2.5
scene.add(camera)


/** 
Controls (enable to rotate window)
**/
const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0, 1);
controls.enableDamping = true

//ограничения масштабирования
controls.minDistance = 1.8
controls.maxDistance = 3.5
//---

//Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});

// scene.background = new THREE.Color( 0x000000, 0);

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.updateShadowMap.enabled = true //тень перемещается вместе с объектом
renderer.outputEncoding = THREE.sRGBEncoding
// renderer.outputEncoding = true //цвета более резкие и менее натуральные

// renderer.render(scene, camera)

/**
 * Animate
 */

// анимация при движении мыши
 document.addEventListener('mousemove', onDocumentMouseMove)

 let mouseX = 0
 let mouseY = 0
 
 let targetX = 0
 let targetY = 0
 
 const windowHalfX = window.innerWidth / 2
 const windowHalfY = window.innerHeight / 2
 
 function onDocumentMouseMove(event) {
     mouseX = (event.clientX - windowHalfX)
     mouseY = (event.clientY - windowHalfY)
 }
 
 //
//  const updateSphere = (event) => {
//      sphere.position.y = window.scrollY * .001
//  }
 
//  window.addEventListener('scroll', updateSphere)
 //--------------


 const clock = new THREE.Clock()

 const tick = () =>
 {
     //
    //  targetX = mouseX * .001 ///--
    //  targetY = mouseY * .001 //--
     //
     
     const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime //--

    // sphere.rotation.y += .5 * (targetX - sphere.rotation.y) //---
    // sphere.rotation.x += .05 * (targetY - sphere.rotation.x) ///--
    // sphere.position.z += -.05 * (targetY - sphere.rotation.x) //--
    //
 
     // Update objects
    //  box.rotation.y = .5 * elapsedTime
 
     // Update Orbital Controls
     controls.update()
 
     // Render
     renderer.render(scene, camera)
 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
     
     //for animation of blackhole
     mixer.update( clock2.getDelta() ) //-----
 }
 
 tick()