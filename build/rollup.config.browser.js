import base from './rollup.config.base'
import uglify from 'rollup-plugin-uglify-es'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'rollupVueComponentTest',
    file: 'dist/rollup-vue-component-test.min.js',
    format: 'iife'
  },
})

config.plugins.push(uglify())

export default config