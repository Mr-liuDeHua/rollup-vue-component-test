import resolve from 'rollup-plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import commonjs from 'rollup-plugin-commonjs' // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import vue from 'rollup-plugin-vue' // 处理vue文件
import babel from 'rollup-plugin-babel'  // rollup 的 babel 插件，ES6转ES5
import css from 'rollup-plugin-css-only' // 提取css，压缩能力不行 rollup-plugin-css-only 支持 css及scss
import CleanCSS from 'clean-css' // 压缩css
import { writeFileSync } from 'fs' // 写文件

export default {
  input: 'src/index.js',
  plugins: [
    resolve({ extensions: ['.vue'] }),
    commonjs(),
    css({ output(style) {
      // 压缩 css 写入 dist/vue-rollup-component-template.css
      writeFileSync('dist/rollup-vue-component-test.css', new CleanCSS().minify(style).styles)
    } }),
    // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
    vue({ css: false }),
    babel()
    
  ]
}


 // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
    // vue({ css: false }),
    // vue({
    //   // 把单文件组件中的样式，插入到html中的style标签
    //   css: true,
    //   // 把组件转换成 render 函数
    //   compileTemplate: true
    // }),
    // resolve({ extensions: ['.vue'] }),
    // commonjs(),
    // css({ output(style) {
    //   // 压缩 css 写入 dist/vue-rollup-component-template.css
    //   writeFileSync('dist/vue-rollup-component-template.css', new CleanCSS().minify(style).styles)
    // } }),
    // babel(({
    //   exclude:'node_modules/**'
    // })),