<template>
    <div>
        <nav>
            <img class="logo-nav" :class="{ 'show-logo': !iconToggle}" src="/vshow_png.png" alt="Logo">

            <div class="navbar">
                <button @click="toggleMenu" class="menu-btn">☰</button>
                <div :class="['nav-links', { 'nav-active': menuOpen }]">
                    <router-link to="/"><span>INICIO</span></router-link>
                    <router-link to="/proyectos"><span>PROYECTOS</span></router-link>
                    <img class="logo-nav" :hidden="menuOpen" src="/vshow_png.png" alt="Logo">
                    <router-link to="/proximosEventos"><span>PROXIMOS EVENTOS</span></router-link>
                    <router-link to="/contacto"><span>CONTACTO</span></router-link>
                </div>
            </div>
           
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuOpen = ref(false);
const iconToggle = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    iconToggle.value = menuOpen.value;
};

const handleResize = () => {
    if (window.innerWidth > 800) {
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