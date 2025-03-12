// @ts-nocheck
import * as THREE from 'three'
import Floor from './Floor'
import Figurine from './figurine'
import Objects from './Object'

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
    this.setFigurineModel();
  }

  setObjects() {
    this.objects = new Objects({
      time: this.time,
      resources: this.resources,
      materials: this.materials,
      physics: this.physics,
      shadows: this.shadows,
      sounds: this.sounds,
      debug: this.debugFolder
    })
    this.container.add(this.objects.container)

  }

  setFloor() {
    this.floor = new Floor()

    this.container.add(this.floor.container)
  }

  // 加载模型
  setFigurineModel() {
    this.figurine = new Figurine({
      time: this.time,
      resources: this.resources,
      objects: this.objects,
      physics: this.physics,
      shadows: this.shadows,
      materials: this.materials,
      controls: this.controls,
      // sounds: this.sounds,
      renderer: this.renderer,
      camera: this.camera,
      // config: this.config
    })
    this.container.add(this.figurine.container)
  }

}