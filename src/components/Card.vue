<template>
  <div class="card">
    <div class="card-image">
      <img :src="require(`${imageMobile}`)" alt="Image of the Card">
    </div>
    <div class="card-content">
      <h1 class="card-title">{{title}}</h1>
      <p class="card-description">{{description}}</p>
      <div class="extra-informations">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface IExtraInformation {
  number: string,
  description: string
}

export default defineComponent({
  name: 'Card',
  mounted () {
    console.log(this.imageMobile)
  },
  props: {
    imageMobile: String,
    imageDesktop: String,
    title: String,
    description: String,
    extraInformations: Array as PropType<IExtraInformation[]>
  }
})
</script>

<style scoped lang="scss">

</style>
