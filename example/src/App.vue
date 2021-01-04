<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <h1>vue-rollup-component-template</h1>
    <p>轻松进行组件开发、发布、展示</p>
    <v-list>
      <v-list-item :list="list"></v-list-item>
    </v-list>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
       list: [
        {
          title: '文档',
          url: 'https://juejin.im/post/5d255c566fb9a07eac05fbd8#heading-6'
        },
        {
          title: 'github',
          url: 'https://github.com/blryli/vue-rollup-component-template'
        }
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
