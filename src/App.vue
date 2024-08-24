<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import ScrollTopButton from './components/auxiliar/ScrollTopButton.vue';
</script>


<template>
    <NavBar></NavBar>
    <RouterView></RouterView>
    <Footer></Footer>
    <ScrollTopButton></ScrollTopButton>
</template>

<style>

</style>
