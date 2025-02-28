import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : './', // Adjust '/your-repo-name/' as needed
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
});