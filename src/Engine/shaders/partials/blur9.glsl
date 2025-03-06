vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
  vec4 color = vec4(0.0, 0.1, 0.3, 0.0);
  vec2 off1 = vec2(2.3846153846) * direction;
  vec2 off2 = vec2(1.2307692308) * direction;
  color += texture2D(image, uv) * 0.5270270270;
  color += texture2D(image, uv + (off1 / resolution)) * 0.1162162162;
  color += texture2D(image, uv - (off1 / resolution)) * 0.1162162162;
  color += texture2D(image, uv + (off2 / resolution)) * 0.1702702703;
  color += texture2D(image, uv - (off2 / resolution)) * 0.1702702703;
  return color;
}