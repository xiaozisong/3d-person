// @ts-nocheck
import * as THREE from 'three'
import FloorMaterials from '../Materials/FloorMaterials'

export default class Floor {
  constructor() {

    // Container
    this.container = new THREE.Object3D()
    this.container.matrixAutoUpdate = false

    // Geometry
    this.geometry = new THREE.PlaneGeometry(2, 2, 10, 10)

    // Colors
    this.colors = {}
    this.colors.topLeft = '#ced9e9'
    this.colors.topRight = '#80b5ff'
    this.colors.bottomRight = '#f9f9f9'
    this.colors.bottomLeft = '#f9f9f9'

    // Material
    this.material = new FloorMaterials()

    this.updateMaterial = () => {
      const topLeft = new THREE.Color(this.colors.topLeft)
      const topRight = new THREE.Color(this.colors.topRight)
      const bottomRight = new THREE.Color(this.colors.bottomRight)
      const bottomLeft = new THREE.Color(this.colors.bottomLeft)

      topLeft.convertLinearToSRGB()
      topRight.convertLinearToSRGB()
      bottomRight.convertLinearToSRGB()
      bottomLeft.convertLinearToSRGB()

      const data = new Uint8Array([
        Math.round(bottomLeft.r * 255), Math.round(bottomLeft.g * 255), Math.round(bottomLeft.b * 255), 255,
        Math.round(bottomRight.r * 255), Math.round(bottomRight.g * 255), Math.round(bottomRight.b * 255), 255,
        Math.round(topLeft.r * 255), Math.round(topLeft.g * 255), Math.round(topLeft.b * 255), 255,
        Math.round(topRight.r * 255), Math.round(topRight.g * 255), Math.round(topRight.b * 255), 255
      ])

      this.backgroundTexture = new THREE.DataTexture(data, 2, 2)
      this.backgroundTexture.magFilter = THREE.LinearFilter
      this.backgroundTexture.needsUpdate = true

      this.material.uniforms.tBackground.value = this.backgroundTexture
    }

    this.updateMaterial()

    // Mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.frustumCulled = false
    this.mesh.matrixAutoUpdate = false
    this.mesh.updateMatrix()
    this.container.add(this.mesh)
  }
}