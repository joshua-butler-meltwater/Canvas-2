
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  // Configure base path - this should be '/' for most applications
  base: '/',
  // Configure server options
  server: {
    // Configure fallback for SPA routing (client-side routing)
    historyApiFallback: true,
    // Handle 404s in development by returning index.html
    proxy: {
      // Redirect all not found to index.html
      '.*': {
        target: '/',
        changeOrigin: true,
        rewrite: (path) => '/index.html',
      },
    },
  },
  // Build configuration
  build: {
    outDir: 'dist',
    // Generate SPA-compatible output
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
