<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <!-- Header del modal cuando no es solo texto -->
      <div class="modal-header" v-if="!isTextOnly">
        <span class="modal-icon">
          <font-awesome-icon class="error-icon" v-if="isError" :icon="['fas', 'exclamation-circle']" />
          <font-awesome-icon v-if="!isLoading && !isError" :icon="['fas', 'check-circle']" />
          <font-awesome-icon v-if="isLoading" :icon="['fas', 'spinner']" spin />
        </span>
        <h2>{{ message }}</h2>
      </div>
      
      <!-- Contenido principal: v-html solo si isTextOnly está activado -->
      <div v-if="isTextOnly">
        <div class="modal-body" v-if="isHtml" v-html="message"></div>
        <div class="modal-body" v-else>{{ message }}</div>
      </div>


      <!-- Botón de cierre o acción -->
      <button v-if="!isLoading" class="modal-button" :class="{'error': isError}" @click="closeModal">
        {{ isTextOnly ? 'Cerrar' : 'OK' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  showModal: Boolean,
  isError: Boolean,
  message: String,
  isLoading: Boolean,
  isTextOnly: Boolean,
  isHtml: Boolean, // Nueva propiedad para controlar si es solo texto
});


const emits = defineEmits(['cerrarModal']);

const closeModal = () => {
  emits('cerrarModal');
};
</script>