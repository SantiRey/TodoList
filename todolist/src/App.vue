<template>
  <main>
    <cx-header/>
    <cx-task/>
  </main>
</template>

<script>
import CxHeader from './components/CxHeader.vue'
import CxTask from './components/CxTask'

export default {
  name: 'App',
  components: {
    CxHeader,
    CxTask
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
