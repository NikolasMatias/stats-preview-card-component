<template>
  <Card :imageMobile="require('./assets/images/image-header-mobile.jpg')"
        title="Get insights that help your business grow."
        description="Discover the benefits of data analytics and make better decisions regarding  revenue, customer experience, and overall efficiency."/>
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
  background-color: $veryDarkBlue;
  min-height: 100vh;
  max-width: 100vw;
}
#app {
  display: flex;
  justify-content: center;
  align-content: center;
  max-height: 100vh;
  width: 100vw;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
