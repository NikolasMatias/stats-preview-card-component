<template>
  <div class="card">
    <div class="card-image">
      <img :src="imageMobile" alt="Image of the Card">
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
  $darkDesaturatedBlue: hsl(244, 38%, 16%);

  .card {
    width: 80%;
    height: 80%;

    background-color: $darkDesaturatedBlue;

    & .card-image {
      $darkDesaturatedBlue: hsl(244, 38%, 16%);
    }

    & .card-image img {
      max-width: 100%;
      border-radius: 1rem 1rem 0 0;
      background-blend-mode: screen;
    }

    & .card-title {

    }

    & .card-description {

    }
  }
</style>
