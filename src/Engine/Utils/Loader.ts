// @ts-nocheck

import EventEmitter from './EventEmitter';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Loader extends EventEmitter {
  constructor() {
    super()
    this.setLoaders()

    this.toLoad = 0
    this.loaded = 0
    this.items = {}
  }

  setLoaders() {
    this.loaders = []

    // Images
    this.loaders.push({
      extensions: ['jpg', 'png', 'webp'],
      action: (_resource) => {
        const image = new Image()

        image.addEventListener('load', () => {
          this.fileLoadEnd(_resource, image)
        })

        image.addEventListener('error', () => {
          this.fileLoadEnd(_resource, image)
        })

        image.src = _resource.source
      }
    })

    // Draco
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('../../../static/draco/')
    dracoLoader.setDecoderConfig({ type: 'js' })

    this.loaders.push({
      extensions: ['drc'],
      action: (_resource) => {
        dracoLoader.load(_resource.source, (_data) => {
          this.fileLoadEnd(_resource, _data)

          DRACOLoader.releaseDecoderModule()
        })
      }
    })

    // GLTF
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    this.loaders.push({
      extensions: ['glb', 'gltf'],
      action: (_resource) => {
        gltfLoader.load(
          _resource.source, 
          (_data) => {
            this.fileLoadEnd(_resource, _data)
          }, 
          undefined, 
          (error) => {
            console.log(error, 'error')
          }
        )
      }
    })

    // FBX
    const fbxLoader = new FBXLoader()

    this.loaders.push({
      extensions: ['fbx'],
      action: (_resource) => {
        fbxLoader.load(_resource.source, (_data) => {
          this.fileLoadEnd(_resource, _data)
        })
      }
    })

  }

  /**
  * Load
  */
  load(_resources = []) {
    for (const _resource of _resources) {
      this.toLoad++
      const extensionMatch = _resource.source.match(/\.([a-z]+)$/)

      if (typeof extensionMatch[1] !== 'undefined') {
        const extension = extensionMatch[1]
        const loader = this.loaders.find((_loader) => _loader.extensions.find((_extension) => _extension === extension))

        if (loader) {
          loader.action(_resource)
        }
        else {
          console.warn(`找不到对应资源: ${_resource} 的loader`)
        }
      }
      else {
        console.warn(`找不到对应资源: ${_resource} 的扩展名`)
      }
    }
  }

  /**
  * File load end
  */
  fileLoadEnd(_resource, _data) {
    this.loaded++
    this.items[_resource.name] = _data

    this.trigger('fileEnd', [_resource, _data])

    if (this.loaded === this.toLoad) {
      this.trigger('end')
    }
  }
}