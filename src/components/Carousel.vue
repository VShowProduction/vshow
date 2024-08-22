<template>
  <div class="main-container">
    <Carousel :autoplay="10000" :wrap-around="true" :items-to-show="1" :loop="true">
      <Slide v-for="slide in 4" :key="slide">
        <div class="carousel__item">
        <h1>IMAGEN DE ALGO {{ slide }}</h1>
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

</script>

<style scoped>
.carousel__item {
  min-height: 500px;
  width: 100%;
  background-color: rgb(9, 235, 84);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
