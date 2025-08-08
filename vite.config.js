import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    target: 'esnext', // Modern JS output
    minify: 'esbuild', // Fast & small
    sourcemap: false, // Disable in production for smaller size
    chunkSizeWarningLimit: 600, // Prevent warnings for big chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Cache separately
        },
      },
    },
  },
});
