<template>
    <div class="detail-container" v-if="project && project.id != 2">
        <div class="img-detail" :style="{ backgroundImage: `url(${project.img})` }"></div>

        <div class="detail-info">
            <h1><strong>{{ project.titulo }}</strong></h1>
            <span>{{ project.fecha }}</span>
            <p>{{ project.texto }}</p>
            <div v-if="project.img2" class="img-detail border-line" :style="{ backgroundImage: `url(${project.img2})` }"></div>
            <p v-if="project.texto2">{{ project.texto2 }}</p>
            <div v-if="project.img3" class="img-detail border-line" :style="{ backgroundImage: `url(${project.img3})` }"></div>
            <p v-if="project.texto3">{{ project.texto3 }}</p>
            <div v-if="project.img4" class="img-detail border-line" :style="{ backgroundImage: `url(${project.img4})` }"></div>
            <p v-if="project.texto4">{{ project.texto4 }}</p>
            <ul v-if="listItems.length > 0">
                <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
            </ul>
            <div v-if="project.img5" class="img-detail border-line" :style="{ backgroundImage: `url(${project.img5})` }"></div>
            <p v-if="project.texto5">{{ project.texto5 }}</p>
            <div v-if="project.img6" class="img-detail border-line" :style="{ backgroundImage: `url(${project.img6})` }"></div>
            <div class="video" v-if="project.video" >
                <hr>
                <h3>Visuales usadas durante el stream</h3>
                <video controls width="800">
                <source :src="project.video" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
            </div>
            
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
const listItems = ref([]);


onMounted(() => {

    const id = route.params.id;

    console.log('ID recibido:', id); // Verifica que el ID sea el esperado
    console.log('Proyectos:', proyectos);

    const filteredProjects = proyectos.filter(proyecto => proyecto.id === Number(id));
    
    if (filteredProjects.length > 0) {
        project.value = filteredProjects[0];
        
        if (project.value.list) {
            console.log('hay list')
            listItems.value = project.value.list.split('|');
            listItems.value.forEach(element => {
                element.trimEnd();
                element.trimStart();
            });

        }
    }



});

</script>

<style lang="scss" scoped></style>