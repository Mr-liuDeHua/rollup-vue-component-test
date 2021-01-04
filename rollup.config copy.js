// /rollup.config.js
import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// 判断环境，生产环境会开启代码压缩
const isDev = process.env.NODE_ENV !== 'production'

// 公共插件配置
const plugins = [
  vue({
    // Dynamically inject css as a <style> tag
    css: true,
    // Explicitly convert template to render function
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    // 把 css 插入到 style 中
    // inject: true,
    // 把 css 放到和js同一目录
    extract: true
  })
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())

// 获取 packages 文件夹路径，作为处理的根路径
const root = path.resolve(__dirname, 'packages')

// 读取 packages 中的所有包
module.exports = fs.readdirSync(root)
  // 过滤，只保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  // 为每一个文件夹创建对应的配置
  .map(item => {
    // 获取包的 package.json 文件
    // @rollup/plugin-json 使 rollup 可以使用 require 的方式将json文件作为模块加载
    // 它返回json对象
    const pkg = require(path.resolve(root, item, 'package.json'))

    // 返回rollup的配置对象
    return {
      // 打包入口：拼接绝对路径
      input: path.resolve(root, item, 'index.js'),
      // 配置打包出口
      // 分别打包两种模块类型 cjs 和 es
      // 路径使用 package.json 中配置的 main 和 module
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.join(root, item, pkg.module),
          format: 'es'
        },
      ],
      // 配置插件
      plugins: plugins
    }
  })

