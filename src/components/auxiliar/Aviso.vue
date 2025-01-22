<template>
    <Transition name="slide-fade">

      <div v-if="visible" class="aviso">
        <button class="close-btn" @click="closeAviso">×</button> <!-- Botón de cierre -->
        <RouterLink to="/VitiAwards">
        <div class="aviso-content">
        </div>
         </RouterLink>
      </div>

    </Transition>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';

  const visible = ref(false);
  
  onMounted( () => {
    nextTick(() => {
        visible.value = true;
  });
  })
  
  const closeAviso = () => {
    visible.value = false;
  };
  </script>
  
  <style lang="scss" scoped>
  /* Transición personalizada */
  
  </style>
  