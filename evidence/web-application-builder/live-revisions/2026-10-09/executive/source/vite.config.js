import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ mode }) => ({
  root: mode === 'test' ? '.' : 'app',
  base: mode === 'test' ? '/' : '/bab-example-executive/',
  plugins: [react()],
  server: { host: '127.0.0.1', strictPort: true },
  preview: { host: '127.0.0.1', strictPort: true },
  build: { outDir: '../dist', emptyOutDir: true },
}));
