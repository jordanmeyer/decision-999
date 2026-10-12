import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set to '/repository-name/' before Pages evaluation. No server-dependent routes.
const base = '/bab-example-process/';
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  root: mode === 'test' ? '.' : 'app',
  base: mode === 'test' ? '/' : base,
  server: { host: '127.0.0.1', strictPort: true, ...(mode === 'test' ? { proxy: { '/bab-example-process/': 'http://127.0.0.1:9722' } } : {}) },
  preview: { host: '127.0.0.1', strictPort: true },
  build: { outDir: '../dist', emptyOutDir: true },
}));
