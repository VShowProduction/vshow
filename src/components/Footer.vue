<template>
    <div class="footer-container">
        <div>

        </div>
        <div>

        </div>

        <div>
            <h5>© {{ Year }} VSHOW PROJECT | TODOS LOS DERECHOS RESERVADOS</h5>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const date = Date.now();
const Year = ref(date.Year)

</script>

<style lang="scss" scoped>

</style>