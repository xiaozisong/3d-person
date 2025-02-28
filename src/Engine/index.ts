import Camera from "./camera";
import Scene from "./scene";
import * as THREE from 'three';

export default class Engine {
  // 渲染器 启用抗锯齿 + 允许渲染器的背景色包含 alpha 通道(背景可以设置透明)
  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true, 
    // preserveDrawingBuffer: true
  });

  domContainer?: HTMLDivElement;
  width: number = 500;
  height: number = 500;
  cameraController: Camera;

  constructor () {
    this.initRenderer();
    this.cameraController = new Camera();
  }

  initRenderer () {
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  initDom(dom: HTMLDivElement) {
    this.domContainer = dom;
    const width = dom.clientWidth;
    const height = dom.clientHeight;
    this.width = width;
    this.height = height;

    this.renderer.setSize(width, height);
    dom.appendChild(this.renderer.domElement);
    this.onWindowResize();
  }

  onWindowResize() {
    const rect = this.domContainer?.getBoundingClientRect();
    const domContainerWidth = rect?.width || this.width;
    const domContainerHeight = rect?.height || this.height;

    this.width = domContainerWidth;
    this.height = domContainerHeight;

    this.cameraController.updateCamera();
    this.renderer.setSize(domContainerWidth, domContainerHeight);
  }
}