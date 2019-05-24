<template>
  <div id="app">
    <Home/>
  </div>
</template>
<script>
import Home from './views/Home.vue'
export default {
  name: 'home',
  components: {
    Home
  }
}
</script>
<style scoped>
#app {
  font-family: "Avenir";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

</style>
