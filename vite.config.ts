import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImport from 'vite-plugin-dynamic-import';
// import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dynamicImport()],
    build: {
        // polyfillDynamicImport: true,
        // target: 'es2015',
        rollupOptions: {
          plugins: [commonjs()],
        }
    },
    // optimizeDeps: {
    //     esbuildOptions: {
    //         plugins: [
    //             // Solves:
    //             // https://github.com/vitejs/vite/issues/5308
    //             // add the name of your package
    //             esbuildCommonjs(['@rio-cloud/rio-session-expired-info', '@rio-cloud/rio-user-menu-component']),
    //         ],
    //     },
    // },
});
