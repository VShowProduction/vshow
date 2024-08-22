<template>
    <div class="footer-container">
        <div>
            <ul>
                <li><a href="https://x.com/VshowProduction" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                <li><a href="https://www.twitch.tv/tecnoanime" target="_blank"><font-awesome-icon :icon="['fab', 'twitch']" /></a></li>
            </ul>
        </div>
        <div>

        </div>

        <div>
            <h3>© {{ Year }} VSHOW PROJECT | TODOS LOS DERECHOS RESERVADOS</h3>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const date = new Date;
const Year = ref(date.getFullYear())
console.log(date)
console.log(Year)

</script>

<style lang="scss" scoped>

</style>