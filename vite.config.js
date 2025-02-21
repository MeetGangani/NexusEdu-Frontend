import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.xml')) return 'sitemap.xml';
          if (assetInfo.name.endsWith('.txt')) return 'robots.txt';
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  define: {
    'import.meta.env..NODE_ENV': JSON.stringify(import.meta.env.NODE_ENV),
    'process.env': {}
  },
  css: {
    postcss: './postcss.config.cjs',
  },
});
