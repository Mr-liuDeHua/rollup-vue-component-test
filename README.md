# rollup-vueComponent-test

#### 介绍
测试 vue 组件 rollup 打包 性能测试

#### 软件架构
软件架构说明
rollup-vueComponent-test
|-- undefined
    |-- .babelrc
    |-- .gitignore
    |-- package.json
    |-- README.en.md
    |-- README.md
    |-- rollup.config copy.js
    |-- rollup.config.js
    |-- yarn.lock
    |-- build                   //  build文件是 rollup 打包的不同环境的配置文件
    |   |-- rollup.config.base.js 
    |   |-- rollup.config.browser.js
    |   |-- rollup.config.es.js
    |   |-- rollup.config.umd.js
    |-- dist                    // dist包rollup框架打包——具体看是否可以打包vue编写的插件
    |   |-- rollup-vue-component-test.css
    |   |-- rollup-vue-component-test.esm.js
    |   |-- rollup-vue-component-test.min.js
    |   |-- rollup-vue-component-test.umd.js
    |-- example                // vue2x 项目 引入打包好的插件测试demo
    |   |-- .babelrc
    |   |-- .editorconfig
    |   |-- .gitignore
    |   |-- .postcssrc.js
    |   |-- index.html
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- README.md
    |   |-- build 
    |   |   |-- build.js
    |   |   |-- check-versions.js
    |   |   |-- logo.png
    |   |   |-- utils.js
    |   |   |-- vue-loader.conf.js
    |   |   |-- webpack.base.conf.js
    |   |   |-- webpack.dev.conf.js
    |   |   |-- webpack.prod.conf.js
    |   |-- config
    |   |   |-- dev.env.js
    |   |   |-- index.js
    |   |   |-- prod.env.js
    |   |-- dist
    |   |   |-- index.html
    |   |   |-- static
    |   |       |-- css
    |   |       |   |-- app.989da27dd66b8400260a39f229192d66.css
    |   |       |   |-- app.989da27dd66b8400260a39f229192d66.css.map
    |   |       |-- js
    |   |           |-- app.65bf6cc000d66f77ee46.js
    |   |           |-- manifest.2ae2e69a05c33dfc65f8.js
    |   |-- src
    |   |   |-- App.vue
    |   |   |-- main.js
    |   |   |-- assets
    |   |   |   |-- logo.png
    |   |   |-- components
    |   |       |-- HelloWorld.vue
    |   |-- static
    |       |-- .gitkeep
    |-- project-one                 // Vue3x项目 引入 打包好的项目
    |   |-- .browserslistrc
    |   |-- .gitignore
    |   |-- babel.config.js
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- README.md
    |   |-- dist
    |   |   |-- favicon.ico
    |   |   |-- index.html
    |   |   |-- css
    |   |   |   |-- app.248e3957.css
    |   |   |-- img
    |   |   |   |-- logo.82b9c7a5.png
    |   |   |-- js
    |   |       |-- about.a9c74c0e.js
    |   |       |-- about.a9c74c0e.js.map
    |   |       |-- app.8b18f682.js
    |   |       |-- app.8b18f682.js.map
    |   |       |-- chunk-vendors.56faa911.js
    |   |       |-- chunk-vendors.56faa911.js.map
    |   |-- public
    |   |   |-- favicon.ico
    |   |   |-- index.html
    |   |-- src
    |       |-- App.vue
    |       |-- main.js
    |       |-- assets
    |       |   |-- logo.png
    |       |-- components
    |       |   |-- HelloWorld.vue
    |       |-- router
    |       |   |-- index.js
    |       |-- store
    |       |   |-- index.js
    |       |-- views
    |           |-- About.vue
    |           |-- Home.vue
    |-- src                         // src 内部是vue编写的插件 
        |-- index.js                // index.js  引入components文件夹内部
        |-- components
        |   |-- list
        |   |   |-- index.js
        |   |   |-- main.vue
        |   |-- list-item
        |       |-- index.js
        |       |-- main.vue
        |-- utils
            |-- util.js


#### 安装教程

本地打包
1.  yarn
2.  yarn build

查看演示 example 或者 project-one 具体查看
1.  cd example    //打开 demo 文件夹
2.  npm i   // 安装依赖
3.  npm run dev  // 运行演示





#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Mr.liu


###  参考文档：https://github.com/blryli/vue-rollup-component-template