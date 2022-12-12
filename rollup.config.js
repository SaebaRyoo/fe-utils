import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser'

export default [

  {
    input: './src/index.ts',
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        entryFileNames: '[name].cjs.js',
        sourcemap: false, // 是否输出sourcemap
      },
      {
        dir: 'lib',
        format: 'esm',
        entryFileNames: '[name].esm.js',
        sourcemap: false, // 是否输出sourcemap
      },
      {
        dir: 'lib',
        format: 'umd',
        entryFileNames: '[name].umd.js',
        name: 'FE_utils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
        sourcemap: false,
        plugins: [terser()],
      },
    ],
    plugins: [resolve(), commonjs(), typescript({ module: "ESNext"})],
  }
]
