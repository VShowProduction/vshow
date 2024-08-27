<template>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-icon">
            <font-awesome-icon class="error-icon" v-if="isError" :icon="['fas', 'exclamation-circle']" />
            <font-awesome-icon v-else :icon="['fas', 'check-circle']" />
          </span>
          <h2>{{ message }}</h2>
        </div>
        <button class="modal-button" :class="{'error': isError}" @click="closeModal">OK</button>

      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue';
  
  const props = defineProps({
    showModal: Boolean,
    isError: Boolean,
    message: String
  });

  const emits = defineEmits(['cerrarModal'])
  
  const closeModal = () => {
    emits('cerrarModal')
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  