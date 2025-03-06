//@ts-nocheck
import shaderFragment from '../shaders/blur/fragment.glsl'
import shaderVertex from '../shaders/blur/vertex.glsl'
// import * as THREE from 'three';
console.log(shaderFragment, 'shaderFragment', shaderVertex, 'shaderVertex')
export default {
    uniforms: {
        tDiffuse: {
            type: 't',
            value: null
        },
        uResolution: {
            type: 'v2',
            value: null,
        },
        uStrength: {
            type: 'v2',
            value: null
        }
    },
    vertexShader: shaderVertex,
    fragmentShader: shaderFragment
}