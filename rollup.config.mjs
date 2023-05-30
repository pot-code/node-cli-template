import typescript from '@rollup/plugin-typescript'
import clear from 'rollup-plugin-clear'
import progress from 'rollup-plugin-progress'
import esbuild from 'rollup-plugin-esbuild'
import summary from 'rollup-plugin-summary'
import terser from '@rollup/plugin-terser'

const prod = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.ts',
  output: {
    dir: './dist',
    preserveModules: true,
  },
  external: [/node_modules/],
  plugins: [
    prod ? typescript() : esbuild(),
    progress(),
    clear({
      targets: ['dist'],
    }),
    prod && summary(),
    prod && terser(),
  ],
}
