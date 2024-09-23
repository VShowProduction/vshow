<template>
    <div class="service-component">
        <h1>NUESTROS SERVICIOS</h1>
        <div class="services">
            <img src="/Gifs/cameras.gif" width="900" height="300">
            <div>
                <h2>SISTEMA DE CAMARAS</h2>
                <p>Nuestro sistema de cámaras para mapas 3D en VRChat
                    permite una visualización dinámica y envolvente, ofreciendo
                    una transmision fluida y de calidad, como si fuera únicas y fluidez en la exploración virtual.</p>
            </div>
        </div>
        <div class="services">
            <div>
                <h2>SISTEMA DE LUCES</h2>
                <p>Tambien ofrecemos un sistema de luces en tiempo real para sus eventos, esta progrmado de una manera
                    que nos permite modificar los colores, direcciones e intesidad de las luces en cualquierm momento.
                </p>
            </div>
            <img src="/Gifs/luz.gif" width="900" height="300">
        </div>
        <div class="services">
            <img src="/Gifs/mapa.gif" width="900" height="300">
            <div>
                <h2>ENTORNOS 3D</h2>
                <p>Ofrecemos un servicio personalizado de creación de mapas 3D para todo tipo de eventos, desde
                    conciertos y galas hasta experiencias interactivas. Diseñamos entornos inmersivos que elevan
                    cualquier evento a otro nivel, garantizando una experiencia como nunca antes para su evento.</p>
            </div>
        </div>

    </div>
</template>

<script setup>

import { onMounted } from 'vue';

onMounted( () => {
    window.scrollTo({
        top: 0,
    })
})

</script>

<style lang="scss" scoped></style>