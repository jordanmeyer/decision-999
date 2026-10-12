import { defineConfig } from 'vite';
export default defineConfig(({ mode }) => ({
 root: mode === 'test' ? '.' : 'app',
 base: mode === 'test' ? '/' : '/bab-example-optimizer/',
 server: { host: '127.0.0.1', strictPort: true },
 preview: { host: '127.0.0.1', strictPort: true },
 worker: { format: 'es' },
 build: { outDir: '../dist', emptyOutDir: true },
}));
