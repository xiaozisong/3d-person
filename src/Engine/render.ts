// @ts-nocheck

import Size from "./Utils/Size"
import Time from "./Utils/Time"
import Resources from './Resources'
import World from "./World"
import Camera from "./camera"
import * as THREE from 'three'

export default class Engine {
  constructor(_options) {
    console.log({_options})
    // Options
    this.$canvas = _options.$canvas

    // Set up
    this.time = new Time()
    this.sizes = new Size()
    this.resources = new Resources()

    this.setRenderer()
    this.setCamera()
    this.setWorld()
  }

  setRenderer() {
    // Scene
    this.scene = new THREE.Scene()
    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.$canvas,
      alpha: true,
      powerPreference: 'high-performance'
    })
    // this.renderer.setClearColor(0x414141, 1)
    this.renderer.setClearColor(0x000000, 1)
    // this.renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 1.5), 2))
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.sizes.viewport.width, this.sizes.viewport.height)
    this.renderer.autoClear = false

    // Resize event
    this.sizes.on('resize', () => {
      this.renderer.setSize(this.sizes.viewport.width, this.sizes.viewport.height)
    })
  }

  setCamera() {
    this.camera = new Camera({
      time: this.time,
      sizes: this.sizes,
      renderer: this.renderer,
      config: this.config
    })

    this.scene.add(this.camera.container)

    this.time.on('tick', () => {
      if (this.world && this.world.car) {
        this.camera.target.x = this.world.car.chassis.object.position.x
        this.camera.target.y = this.world.car.chassis.object.position.y
      }
    })
  }

  setWorld() {
    this.world = new World({
      resources: this.resources,
      time: this.time,
      sizes: this.sizes,
      camera: this.camera,
      scene: this.scene,
      renderer: this.renderer,
    })
    console.log(this.world.container)
    
    this.scene.add(new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshBasicMaterial({ color: 'red' })))
  }


}