<template>
    <div>
        <nav  :class="{ 'custom-nav': isCustomRoute}">
            <img v-if="!isCustomRoute" class="logo-nav" :class="{ 'show-logo': !iconToggle}" src="/vshow_png.png" alt="Logo">
            <img v-else :class="{ 'show-logo': !iconToggle}" src="/Award/logo-navbar.png" height="100">


            <div class="navbar">
                <button @click="toggleMenu" class="menu-btn">☰</button>
                <div :class="['nav-links', { 'nav-active': menuOpen }]">
                    <router-link to="/"><span>INICIO</span></router-link>
                    <router-link to="/proyectos"><span>PROYECTOS</span></router-link>
                    <img v-if="!isCustomRoute" class="logo-nav" :hidden="menuOpen" src="/vshow_png.png" alt="Logo">
                    <img v-else src="/Award/logo-navbar.png" :hidden="menuOpen" height="100">
                    <router-link to="/proximosEventos"><span>PROXIMOS EVENTOS</span></router-link>
                    <router-link to="/contacto"><span>CONTACTO</span></router-link>
                </div>
            </div>
           
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useRoute } from 'vue-router';

const menuOpen = ref(false);
const iconToggle = ref(false);
const route = useRoute();


const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    // iconToggle.value = menuOpen.value;
};

const isCustomRoute = computed(() => {
    return route.path === '/VitiAwards' ; // Cambia las rutas según tus necesidades
});

const handleResize = () => {
    if (window.innerWidth > 1000) {
        menuOpen.value = false;
        iconToggle.value = false;
    }else {
        iconToggle.value = true;
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize()
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>

</style>