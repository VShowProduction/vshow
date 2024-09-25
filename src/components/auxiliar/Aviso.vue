<template>
    <Transition name="slide-fade">
      <div v-if="visible" class="aviso" @click="closeAviso">
        <div class="aviso-content">
          <img src="/LOGO_WC.png" width="70px"/>
          <p>YA ESTA DISPONIBLE LA INSCRIPCION PARA LA <span>VT WORLD CUP 2</span></p>
          <RouterLink to="/FormularioWorldCup">Ir al formulario</RouterLink>
        </div>
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
  