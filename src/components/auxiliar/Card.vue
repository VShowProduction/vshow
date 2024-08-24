<template>
    <a>
        <div class="card-container">
            <div class="art-container">
                <img :src="props.imagen" alt="" width="30px" height="30px">
            </div>

            <div class="data-container">
                <h3>{{ props.titulo }}</h3>
            </div>
        </div>
    </a>

</template>

<script setup>
import { onMounted, ref } from 'vue';


const props = defineProps(['texto', 'imagen', 'id', 'titulo'])
var texto = ref(props.texto)
onMounted(() => {
    if (texto.value.length >= 30) {
        const carTotal = texto.value.length;
        texto.value.slice(100);
        console.log('Menor 30 ')
    }
})

</script>

<style lang="scss" scoped></style>