import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl()
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build',  // 与 CRA 保持一致的输出目录
    sourcemap: true
  }
});