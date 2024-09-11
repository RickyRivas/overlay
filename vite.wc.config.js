import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.js'),
            name: 'ProofOverlayv2',
            fileName: 'proof-overlayv2',
            formats: [ 'iife' ]
        },
        outDir: 'dist'
    },
    plugins: [ svelte() ]
});