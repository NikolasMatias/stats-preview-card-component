<template>
  <Card imageMobile="../assets/images/image-header-mobile.jpg"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/Card.vue'

export default defineComponent({
  name: 'App',
  components: {
    Card
  }
})
</script>

<style lang="scss">
$veryDarkBlue: hsl(233, 47%, 7%);

body {
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: $veryDarkBlue;
}
#app {
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
