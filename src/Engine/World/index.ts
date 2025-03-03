// @ts-nocheck
import * as THREE from 'three'
import Floor from './Floor'

export default class World {
  constructor(_options) {
    // Options
    this.resources = _options.resources
    this.time = _options.time
    this.sizes = _options.sizes
    this.camera = _options.camera
    this.scene = _options.scene
    this.renderer = _options.renderer

    // Set up
    this.container = new THREE.Object3D()
    this.container.matrixAutoUpdate = false
    this.setFloor();
  }

  setFloor() {
    this.floor = new Floor()

    this.container.add(this.floor.container)
  }

}