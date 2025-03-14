import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This ensures assets use relative paths
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Use legacy mode for better compatibility with basic hosting
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      output: {
        format: 'iife', // Use immediately invoked function expression instead of ES modules
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Ensure no module scripts
        intro: 'window.process = { env: {} };'
      }
    },
    // This ensures the scripts don't use type="module"
    cssCodeSplit: false,
    modulePreload: false
  }
})