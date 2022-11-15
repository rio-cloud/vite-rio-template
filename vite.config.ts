import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), visualizer()],
    build: {
        outDir: 'build',
        sourcemap: true,
        rollupOptions: {
            manualChunks: {
                'vendor.common': ['@sentry/browser', 'framer-motion', 'oidc-client-ts'],
            },
        },
    },
    server: {
        port: 3000,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: 'test/utils/setupTests.ts',
        include: ['**/__test__/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
});
