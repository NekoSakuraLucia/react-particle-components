import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['index.js'],
    format: ['esm', 'cjs'],
    sourcemap: true,
    clean: true,
    jsx: 'react',
    target: 'esnext',
    dts: true,
    external: ["react", "react-dom"]
});