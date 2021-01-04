  
import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'rollup-vue-component-test',
    file: 'dist/rollup-vue-component-test.umd.js',
    format: 'umd'
  },
})

export default config