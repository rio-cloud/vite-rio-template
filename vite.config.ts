import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), visualizer()],
    build: {
        sourcemap: true,
        rollupOptions: {
            manualChunks: {
                commonVendor: ['core-js', '@sentry/browser', 'framer-motion', 'oidc-client-ts'],
            },
        },
    },
});
