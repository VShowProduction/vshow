<template>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-icon">
            <font-awesome-icon class="error-icon" v-if="isError" :icon="['fas', 'exclamation-circle']" />
            <font-awesome-icon v-if="!isLoading && !isError" :icon="['fas', 'check-circle']" />
            <font-awesome-icon v-if="isLoading" :icon="['fas', 'spinner']" spin />
          </span>
          <h2>{{ message }}</h2>
        </div>
        <button v-if="!isLoading" class="modal-button" :class="{'error': isError}" @click="closeModal">OK</button>

      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue';
  
  const props = defineProps({
    showModal: Boolean,
    isError: Boolean,
    message: String,
    isLoading: Boolean,
  });

  const emits = defineEmits(['cerrarModal'])
  
  const closeModal = () => {
    emits('cerrarModal')
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  