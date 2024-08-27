<template>
        <div class="card-container" @click="details">
            <div class="art-container" :style="{backgroundImage: `url(${props.imagen})`}">
            </div>

            <div class="data-container">
                <h3>{{ props.titulo }}</h3>
            </div>
        </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps(['texto', 'imagen', 'id', 'titulo'])

onMounted(() => {

})

const details = () => {
    console.log(props.id)
    router.push(`/proyectos/${props.id}`)
}

</script>

<style lang="scss" scoped></style>