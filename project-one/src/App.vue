<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <h1>vue-rollup-component-template</h1>
    <p>轻松进行组件开发、发布、展示</p>
    <v-list>
      <v-list-item :list="list"></v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  name:'app',
  data() {
    return {
      list:  [
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
