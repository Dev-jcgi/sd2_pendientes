import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Builds a single script (and its CSS) into public/manual/, loaded by public/manual-implementacion.html.
export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: '../public/manual',
    emptyOutDir: true,
    lib: { entry: 'src/main.jsx', formats: ['es'], fileName: () => 'diagramas.js' },
    rollupOptions: { output: { assetFileNames: 'diagramas.[ext]' } }
  }
});
