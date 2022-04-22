import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'index.js',
    output: {
        file: 'build/js/vite.min.js',
        format: 'cjs',
    },
    plugins: [nodeResolve(), commonjs()],
};
