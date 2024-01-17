import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named'
            }
        ],
        plugins: [ 
            postcss({
              plugins: [],
              minimize: true,
            }),
            typescript({ tsconfig: './tsconfig.json' }), 
            babel({
              exclude: 'node_modules/**',
              presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            terser(), 
        ]
    }
]