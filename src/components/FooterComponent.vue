<template>
    <div class="footer-container" :class="{'custom-footer' : isCustomRoute}">
        <div class="footer-image-container">
            <img v-if="!isCustomRoute" src="/iconos.png" height="200" width="200">
            <img v-else src="/Award/logo-footer-grande.png" height="200" width="200">

        </div>
        <div>
            <ul>
                <li><a href="https://x.com/VshowProduction" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                <li><a href="https://www.twitch.tv/tecnoanime" target="_blank"><font-awesome-icon :icon="['fab', 'twitch']" /></a></li>
                <li><a href="https://www.twitch.tv/tecnoanime" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>

            </ul>
        </div>
        <div>

        </div>

        <div class="text-footer">
            <h5>¿Quieres trabajar con nosotros? Haz click <RouterLink to="/Unete">aqui</RouterLink></h5>
        </div>

        <div class="text-footer">
            <h4>© {{ Year }} VSHOW PRODUCTION | TODOS LOS DERECHOS RESERVADOS</h4>
        </div>
    </div>
</template>

<script setup>
import { ref , computed} from 'vue';
import { useRoute } from 'vue-router';

const date = new Date;
const Year = ref(date.getFullYear())
const route = useRoute();



const isCustomRoute = computed(() => {
    return route.path === '/VitiAwards' ; // Cambia las rutas según tus necesidades
});

</script>

<style lang="scss" scoped>

</style>