<template>
    <Carousel></Carousel>
    <!-- <img class="main-logo" src="vshow_png.png"> -->
</template>
  
  <script setup>
   import Carousel from '@/components/Carousel.vue'
   import { ref } from 'vue';

   var noticias = ref([
    {
    imagen: 'vshow_png.png',
    titulo: "OLAA",
    subtitulo: "Subti",
    id: 1,
    categoria: "categoria"
   },
   {
    imagen: 'vshow_logo.png',
    titulo: "OLAA",
    subtitulo: "Subti",
    id: 1,
    categoria: "categoria"
   },
   {
    imagen: 'vshow_png.png',
    titulo: "OLAA",
    subtitulo: "Subti",
    id: 1,
    categoria: "categoria"
   }


   ])
  </script>
  