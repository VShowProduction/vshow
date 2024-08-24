<template>
    <div class="footer-container">
        <div class="image-container">
            <img src="/iconos.png" height="200" width="200">
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
            <h4>© {{ Year }} VSHOW PRODUCTION | TODOS LOS DERECHOS RESERVADOS</h4>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const date = new Date;
const Year = ref(date.getFullYear())
</script>

<style lang="scss" scoped>

</style>