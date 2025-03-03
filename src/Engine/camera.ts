// @ts-nocheck
import * as THREE from 'three';
export default class Camera {
  constructor(_options) {
    // Options
    this.time = _options.time
    this.sizes = _options.sizes
    this.renderer = _options.renderer

    // Set up
    this.container = new THREE.Object3D()
    this.container.matrixAutoUpdate = false

    this.target = new THREE.Vector3(0, 0, 0)
    this.targetEased = new THREE.Vector3(0, 0, 0)
    this.easing = 0.15

  }
}