<template>
    <div class="imagen-container">
        <a href="https://x.com/VshowProduction/status/1837229022146670769" target="_blank"><div id="gala" class="img-ev"></div></a>
    </div>
    <div class="imagen-container">
        <a href="https://x.com/VshowProduction/status/1837229022146670769" target="_blank"><div id="world-cup" class="img-ev"></div></a>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.imagen-container {
    display: flex;

    a {
        width: 100%;
    }
}


.img-ev{
    transition: transform 0.2s ease-in-out; // Transición suave
    margin: 20px;
    &:hover {
        transform: scale(1.02);  // Aumenta el tamaño del li sin afectar el flujo
        cursor: pointer;
    }
}

#gala {
    width: 100%;
    height: 200px;
    background-image: url("/Gala_World_Cup.png");
    background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
    background-position: center; /* Centra la imagen en el contenedor */
    background-repeat: no-repeat; /* Evita que la imagen se repita */
}

#world-cup {
    width: 100%;
    height: 200px;
    background-image: url("/world_cup.png");
    background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
    background-position: center; /* Centra la imagen en el contenedor */
    background-repeat: no-repeat; /* Evita que la imagen se repita */
}
</style>