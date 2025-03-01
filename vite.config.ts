import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/m-hassantahir.github.io/', // Important for GitHub Pages to work
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
