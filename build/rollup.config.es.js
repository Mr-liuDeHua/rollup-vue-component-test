  
import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'rollup-vue-component-test',
    file: 'dist/rollup-vue-component-test.esm.js',
    format: 'es',
  },
})

export default config