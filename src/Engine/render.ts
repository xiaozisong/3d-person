// @ts-nocheck

import Size from "./Utils/Size"
import Time from "./Utils/Time"
import Resources from './Resources'
import World from "./World"
import Camera from "./camera"
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import BlurPass from "./Passes/Blur"
import GlowsPass from "./Passes/Glows"
export default class Engine {
  constructor(_options) {
    // Options
    this.$canvas = _options.$canvas

    // Set up
    this.time = new Time()
    this.sizes = new Size()
    this.resources = new Resources()

    this.setRenderer()
    this.setCamera()
    this.setPasses()
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

  setPasses() {
    this.passes = {}
    this.passes.composer = new EffectComposer(this.renderer)

    // Create passes
    this.passes.renderPass = new RenderPass(this.scene, this.camera.instance)

    this.passes.horizontalBlurPass = new ShaderPass(BlurPass)
     // 添加调试代码
     console.log('Shader Program Status:', this.passes.horizontalBlurPass.material)
    this.passes.horizontalBlurPass.strength = 1
    this.passes.horizontalBlurPass.material.uniforms.uResolution.value = new THREE.Vector2(this.sizes.viewport.width, this.sizes.viewport.height)
    this.passes.horizontalBlurPass.material.uniforms.uStrength.value = new THREE.Vector2(this.passes.horizontalBlurPass.strength, 0)

    this.passes.verticalBlurPass = new ShaderPass(BlurPass)
    this.passes.verticalBlurPass.strength = 1
    this.passes.verticalBlurPass.material.uniforms.uResolution.value = new THREE.Vector2(this.sizes.viewport.width, this.sizes.viewport.height)
    this.passes.verticalBlurPass.material.uniforms.uStrength.value = new THREE.Vector2(0, this.passes.verticalBlurPass.strength)

    this.passes.glowsPass = new ShaderPass(GlowsPass)
    this.passes.glowsPass.color = '#ffcfe0'
    this.passes.glowsPass.material.uniforms.uPosition.value = new THREE.Vector2(0, 0.25)
    this.passes.glowsPass.material.uniforms.uRadius.value = 0.7
    this.passes.glowsPass.material.uniforms.uColor.value = new THREE.Color(this.passes.glowsPass.color)
    this.passes.glowsPass.material.uniforms.uColor.value.convertLinearToSRGB()
    this.passes.glowsPass.material.uniforms.uAlpha.value = 0.55

    // Add passes
    this.passes.composer.addPass(this.passes.renderPass)
    this.passes.composer.addPass(this.passes.horizontalBlurPass)
    this.passes.composer.addPass(this.passes.verticalBlurPass)
    this.passes.composer.addPass(this.passes.glowsPass)
    // Time tick
    this.time.on('tick', () => {
      this.passes.horizontalBlurPass.enabled = this.passes.horizontalBlurPass.material.uniforms.uStrength.value.x > 0
      this.passes.verticalBlurPass.enabled = this.passes.verticalBlurPass.material.uniforms.uStrength.value.y > 0

      // Renderer
      this.passes.composer.render()
      // this.renderer.domElement.style.background = 'black'
      // this.renderer.render(this.scene, this.camera.instance)
    })

    // Resize event
    this.sizes.on('resize', () => {
      this.renderer.setSize(this.sizes.viewport.width, this.sizes.viewport.height)
      this.passes.composer.setSize(this.sizes.viewport.width, this.sizes.viewport.height)
      this.passes.horizontalBlurPass.material.uniforms.uResolution.value.x = this.sizes.viewport.width
      this.passes.horizontalBlurPass.material.uniforms.uResolution.value.y = this.sizes.viewport.height
      this.passes.verticalBlurPass.material.uniforms.uResolution.value.x = this.sizes.viewport.width
      this.passes.verticalBlurPass.material.uniforms.uResolution.value.y = this.sizes.viewport.height
    })
  }

  setCamera() {
    this.camera = new Camera({
      time: this.time,
      sizes: this.sizes,
      renderer: this.renderer,
    })
    this.scene.add(this.camera.container)

    this.time.on('tick', () => {
      // if (this.world && this.world.car) {
      //   this.camera.target.x = this.world.car.chassis.object.position.x
      //   this.camera.target.y = this.world.car.chassis.object.position.y
      // }
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
    this.scene.add(this.world.container)
  }


}