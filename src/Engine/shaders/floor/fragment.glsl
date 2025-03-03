varying vec2 vUv;

uniform sampler2D tBackground;

void main() {
  vec4 textureColor = texture2D(tBackground, vUv);
  gl_FragColor = textureColor;
}
