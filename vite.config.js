import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Public base path when served in production
  base: process.env.VITE_BASE_PATH || '/',

  // Optional: Optimize build by removing legal comments
  esbuild: {
    legalComments: 'none',
  },

  build: {
    minify: 'esbuild',     // Fastest minifier
    target: 'esnext',      // Output for modern browsers
    sourcemap: false,      // Disable source maps for smaller builds
    outDir: 'dist',        // Default output directory
    assetsDir: 'assets'    // Directory for static assets
  },

  define: {
    // Optional: Custom global constants
    __APP_VERSION__: JSON.stringify('1.0.0')
  },

  server: {
    open: true             // Automatically open in browser
  }
})
