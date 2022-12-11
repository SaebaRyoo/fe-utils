import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json' assert {type: 'json'}
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts', // 入口文件
  output: [
    {
      file: pkg.main, // 输出文件名称
      // file: 'dist/fe-utils.cjs.js',
      format: 'cjs', // 输出模块格式
      sourcemap: false, // 是否输出sourcemap
    },
    {
      file: pkg.module,
      // file: 'dist/fe-utils.esm.js',
      format: 'esm',
      sourcemap: false,
    },
    {
      file: 'dist/fe-utils.min.js',
      format: 'umd',
      name: 'FE_utils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
      sourcemap: false,
      plugins: [terser()],
    },
  ],
  plugins: [
    // importAssertionsPlugin(),
    typescript({

      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
        },
      },
      useTsconfigDeclarationDir: true, // 使用tsconfig中的声明文件目录配置
    }),
  ],
}
