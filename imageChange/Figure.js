import * as THREE from '../lib/three.module.js'
import { gsap } from '../node_modules/gsap/all.js'

export default class Figure {
    constructor(scene) {
        this.$image = document.querySelector('.tile__image')
        this.scene = scene

        this.loader = new THREE.TextureLoader()

        this.image = this.loader.load(this.$image.src)
        this.hoverImage = this.loader.load(this.$image.dataset.hover)
        this.$image.style.opacity = 0
        this.sizes = new THREE.Vector2(0, 0)
        this.offset = new THREE.Vector2(0, 0)

        this.getSizes()

        this.createMesh()

        this.mouse = new THREE.Vector2(0, 0)
        window.addEventListener('mousemove', ev => {
            this.onMouseMove(ev)
        })
    }

    getSizes() {
        // console.log(this.$image.getBoundingClientRect());
        // const { width, height, top, left } = this.$image.getBoundingClientRect()
        const { width, height, top, left } = this.$image.getBoundingClientRect()

        // const width = 1280 
        // const height = 689

        this.sizes.set(width, height)
        
        // this.sizes.set('400px', '500px')
        
        // this.offset.set(
            // left - window.innerWidth / 2 + width / 2,
            // -top + window.innerHeight / 2 - height / 2
        // )
    }

    createMesh() {
        this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1)
        this.material = new THREE.MeshBasicMaterial({
            map: this.image
        })

        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.position.set(this.offset.x, this.offset.y, 0)
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)

        this.scene.add(this.mesh)
    }

    onMouseMove(event) {
        gsap.to(this.mouse, {
            duration: 0.5,
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1
        })

        gsap.to(this.mesh.rotation, {
            duration: 0.5,
            x: -this.mouse.y * 0.3,
            y: this.mouse.x * (Math.PI / 6)
        })
    }
}

