<template>
    <div  class="proyect-container">
         <div v-for="p in proyc" class="grid-card">
            <Card :texto="p.texto" :imagen="p.img" :titulo="p.titulo" :id="p.id"></Card>
         </div>
    </div>
</template>

<script setup>
import Card from './auxiliar/Card.vue';
import proyectos from '../assets/js/proyectos';
import { onMounted, ref } from 'vue';

var proyc = ref();

onMounted(() => {
    proyc.value = proyectos.slice();
})


</script>

<style lang="scss" scoped>

</style>