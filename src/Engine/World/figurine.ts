// @ts-nocheck
import * as THREE from 'three'

export default class Figurine {
  constructor(_options) {
    // Options
    this.time = _options.time
    this.resources = _options.resources
    this.objects = _options.objects
    this.physics = _options.physics
    this.shadows = _options.shadows
    this.materials = _options.materials
    this.controls = _options.controls
    this.renderer = _options.renderer
    this.camera = _options.camera

    // Set up
    this.container = new THREE.Object3D()
    this.position = new THREE.Vector3()

    this.setModels()
    this.setChassis()

  }

  setModels() {
    this.models = {}

    this.models.chassis = this.resources.items.carDefaultChassis
    this.models.antena = this.resources.items.carDefaultAntena
    this.models.backLightsBrake = this.resources.items.carDefaultBackLightsBrake
    this.models.backLightsReverse = this.resources.items.carDefaultBackLightsReverse
    this.models.wheel = this.resources.items.carDefaultWheel

  }

  setChassis() {
    this.chassis = {}
    this.chassis.offset = new THREE.Vector3(0, 0, - 0.28)
    this.chassis.object = this.objects.getConvertedMesh(this.models.chassis.scene.children)
    this.chassis.object.position.copy(this.physics.car.chassis.body.position)
    this.chassis.oldPosition = this.chassis.object.position.clone()
    this.container.add(this.chassis.object)

    this.shadows.add(this.chassis.object, { sizeX: 3, sizeY: 2, offsetZ: 0.2 })

    // Time tick
    this.time.on('tick', () => {
      // Save old position for movement calculation
      this.chassis.oldPosition = this.chassis.object.position.clone()

      // Update if mode physics
      if (!this.transformControls.enabled) {
        this.chassis.object.position.copy(this.physics.car.chassis.body.position).add(this.chassis.offset)
        this.chassis.object.quaternion.copy(this.physics.car.chassis.body.quaternion)
      }

      // Update position
      this.position.copy(this.chassis.object.position)
    })
  }

}