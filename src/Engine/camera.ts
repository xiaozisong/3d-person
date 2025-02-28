import * as THREE from 'three';

export default class Camera {
  // 当前相机实例
  camera: THREE.OrthographicCamera | THREE.PerspectiveCamera;

  constructor () {

    this.camera = this.init();
  }

  init () {
    return new THREE.OrthographicCamera(100, 100, 100, 100, 100, 1000);
  }

  updateCamera() {
    
  }

}