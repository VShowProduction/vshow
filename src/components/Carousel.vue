<template>
  <div class="main-container">
    <Carousel :autoplay="10000" :wrap-around="true" :items-to-show="1" :loop="true">
      <Slide v-for="(slide, index) in 4" :key="slide">
        <div class="carousel__item" :style="{ backgroundImage: `url(${backgroundImages[index]})` }">
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
    </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

const backgroundImages = ref([
  'SLIDER-1.webp',
  'Slider-2.webp',
  'Slider-3.webp',
  'Slider-4.webp'
]);

console.log(backgroundImages)

</script>

<style scoped>

</style>
