<script setup>
import NavBar from './components/NavBarComponent.vue';
import Footer from './components/FooterComponent.vue';
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
