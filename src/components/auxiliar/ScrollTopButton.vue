<template>
    <button @click="scrollToTop" class="scroll-to-top">
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
  </template>
  
  <script setup>
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  </script>
  
  <style scoped>
  .scroll-to-top {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: none;
    color: white;
    border: none;
    padding: 10px 12px;
    border-radius: 20%;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 3px solid white;
    font-size: 24px;
    z-index: 1000;

    transition: transform 0.2s ease-in-out;

  }
  
  .scroll-to-top:hover {
    transform: scale(1.1); 
    transition: transform 0.2s ease-in-out;
    color: #04fc83;
    border: 3px solid #04fc83;
  }
  </style>