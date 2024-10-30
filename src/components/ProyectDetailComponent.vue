<template>
    <div class="detail-container" v-if="project">
        <div class="img-detail" :style="{ backgroundImage: `url(${project.img})` }"></div>

        <div class="detail-info">
            <h1><strong>{{ project.titulo }}</strong></h1>
            <span>{{ project.fecha }}</span>
            <p>{{ project.texto }}</p>
            <div v-if="project.img2" class="img-detail" :style="{ backgroundImage: `url(${project.img2})` }">
            </div>
            <div class="img-pack" v-if="project.packs">
                <img v-if="project.pimg6" :src="project.pimg6" alt="" width="700px">
                <div class="img-pack2">
                    <img  v-if="project.pimg7" :src="project.pimg7" alt="" width="400px">
                    <img  v-if="project.pimg8" :src="project.pimg8" alt="" width="400px">
                </div>
                <img  v-if="project.pimg9" :src="project.pimg9" alt="" width="700px">
                <img  v-if="project.pimg10" :src="project.pimg10" alt="" width="700px">
            </div>

            <p v-if="project.texto2">{{ project.texto2 }}</p>
            <div v-if="project.img3" class="img-detail" :style="{ backgroundImage: `url(${project.img3})` }">
            </div>
 
            <h2>{{ project.titulo2 }}</h2>
            <p v-if="project.texto3">{{ project.texto3 }} <span><a v-if="project.link" :href="project.link" target="_blank">LINK</a></span></p>
            <div v-if="project.img4" class="img-detail" :style="{ backgroundImage: `url(${project.img4})` }">
            </div>
            <div class="img-pack" v-if="project.packs">
                <img v-if="project.pimg11" :src="project.pimg11" alt="" width="700px" height="600px">
                <div class="img-pack2">
                    <img  v-if="project.pimg12" :src="project.pimg12" alt="" width="400px" height="200px">
                    <img  v-if="project.pimg13" :src="project.pimg13" alt="" width="400px" height="200px">

                    <div class="img-pack3">
                    <img  v-if="project.pimg14" :src="project.pimg14" alt="" width="400px" height="200px">
                    <img  v-if="project.pimg15" :src="project.pimg15" alt="" width="700px">
                    </div>
                </div>
            </div>

            <h2>{{ project.titulo3 }}</h2>
            <p v-if="project.texto4">{{ project.texto4 }}<span><a v-if="project.link2" :href="project.link2" target="_blank">LINK</a></span></p>
            <ul v-if="listItems.length > 0">
                <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
            </ul>
            <div v-if="project.img5" class="img-detail" :style="{ backgroundImage: `url(${project.img5})` }">
            </div>

            <div class="img-pack" v-if="project.packs">
                <img v-if="project.pimg16" :src="project.pimg16" alt="" width="500px">
                <div class="img-pack2">
                    <img  v-if="project.pimg17" :src="project.pimg17" alt="" width="500px">
                    <img  v-if="project.pimg18" :src="project.pimg18" alt="" width="500px">

                    <div class="img-pack3">
                    <img  v-if="project.pimg19" :src="project.pimg19" alt="" width="250px">
                    <img  v-if="project.pimg20" :src="project.pimg20" alt="" width="250px">
                    </div>
                </div>
            </div>

            <h2>{{ project.titulo4 }}</h2>
            <p v-if="project.texto5">{{ project.texto5 }}</p>
            <div v-if="project.img6" class="img-detail" :style="{ backgroundImage: `url(${project.img6})` }">
            </div>
            <div class="img-pack" v-if="project.packs">
                <img v-if="project.pimg1" :src="project.pimg1" alt="" width="700px">
                <div class="img-pack2">
                    <img  v-if="project.pimg2" :src="project.pimg2" alt="" width="400px">
                    <img  v-if="project.pimg3" :src="project.pimg3" alt="" width="400px">
                </div>
                <img  v-if="project.pimg4" :src="project.pimg4" alt="" width="700px">
                <img  v-if="project.pimg5" :src="project.pimg5" alt="" width="700px">
            </div>
            


            <p v-if="project.footer">{{ project.footer }} <span><a v-if="project.link3" :href="project.link3" target="_blank">YOUTUBE</a></span></p>
            <div v-if="project.img7" class="img-detail" :style="{ backgroundImage: `url(${project.img7})` }">
            </div>
            <div class="video" v-if="project.video">
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

    window.scrollTo({
        top: 0,
    })

    const id = route.params.id;

    const filteredProjects = proyectos.filter(proyecto => proyecto.id === Number(id));

    if (filteredProjects.length > 0) {
        project.value = filteredProjects[0];

        if (project.value.list) {
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