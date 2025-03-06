#define M_PI 3.1415926535897932384626433832795

uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform vec2 uStrength;

varying vec2 vUv;

#include ../partials/blur9.glsl

void main()
{
    vec4 diffuseColor = texture2D(tDiffuse, vUv);
    vec4 blurColor = blur9(tDiffuse, vUv, uResolution, uStrength);
    float blurStrength = 1.0 - pow(sin(vUv.y * M_PI), 2.0);

    // 添加额外的蓝色调
    vec4 tintColor = vec4(0.0, 0.2, 0.5, 1.0);
    blurColor = mix(blurColor, tintColor, 0.3);
    
    gl_FragColor = mix(diffuseColor, blurColor, blurStrength);
}
