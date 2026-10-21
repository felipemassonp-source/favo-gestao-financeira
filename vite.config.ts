import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('firebase/auth') || id.includes('@firebase/auth')) {
                return 'firebase-auth';
              }
              if (id.includes('firebase/firestore') || id.includes('@firebase/firestore')) {
                return 'firebase-firestore';
              }
              if (id.includes('firebase')) {
                return 'firebase-core';
              }
              if (id.includes('gsap')) {
                return 'gsap';
              }
              if (id.includes('motion') || id.includes('framer-motion')) {
                return 'motion';
              }
              if (id.includes('lucide-react')) {
                return 'icons';
              }
              if (id.includes('react-dom') || id.includes('react-router') || id.includes('/react/')) {
                return 'vendor-react';
              }
            }
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
