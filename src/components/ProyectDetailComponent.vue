<template>
    <div class="detail-container" v-if="project">
        <div class="img-detail"  :style="{ backgroundImage: `url(${project.img})` }"></div>

        <div class="detail-info">
            <h2>{{ project.titulo }}</h2>
            <span>{{ project.fecha }}</span>
            <p>{{ project.texto }}</p>
            <div v-if="project.img2" class="img-detail"  :style="{ backgroundImage: `url(${project.img2})` }"></div>
            <p v-if="project.texto2">{{ project.texto2 }}</p>
            <div v-if="project.img3" class="img-detail"  :style="{ backgroundImage: `url(${project.img3})` }"></div>
            <p v-if="project.texto3">{{ project.texto3 }}</p>
            <div v-if="project.img4" class="img-detail"  :style="{ backgroundImage: `url(${project.img4})` }"></div>
            <p v-if="project.texto4">{{ project.texto4 }}</p>
        </div>
    </div>

    <div v-else>
        <h1>Proyecto no encontrado</h1>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import proyectos from '../assets/js/proyectos';

const route = useRoute();
const project = ref(null);

onMounted(() => {

    const id = route.params.id;

    console.log('ID recibido:', id); // Verifica que el ID sea el esperado
    console.log('Proyectos:', proyectos);

    const filteredProjects = proyectos.filter(proyecto => proyecto.id === Number(id));

if (filteredProjects.length > 0) {
     project.value = filteredProjects[0];
    console.log('Proyecto encontrado:', project.value);
} else {
    console.log('No se encontró ningún proyecto con ese ID');
}
});

</script>

<style lang="scss" scoped>


</style>