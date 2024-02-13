import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.js'),
            name: 'ProofOverlay',
            fileName: 'proof-overlay',
            formats: [ 'iife' ]
        },
        outDir: 'dist-js'
    },
    plugins: [ svelte() ]
});