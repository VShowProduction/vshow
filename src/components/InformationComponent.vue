<template>
    <div class="container">
        <div class="info-container">
            <h1>¿Quiénes somos?</h1>
            <p>
                Este proyecto surge tras la creación de la <span>VTUBER WORLD CUP 2023</span>
                con el objetivo de dar a conocer los proyectos que se intentarían llevar a cabo durante 2024. Sin embargo,
                durante el proceso, el equipo comenzó a trabajar en diferentes proyectos secundarios, explorando nuevas
                técnicas
                para conseguir resultados similares a los de la televisión y las empresas de VTubers en Asia, pero
                dentro de los límites de lo considerado "indie" y otros entornos virtuales como VRChat.
                <br><br>
                Tras casi un año de realizar eventos como podcasts,
                competencias y
                comenzar a trabajar en un concierto en 3D, <span>TecnoAnime</span> decidió convertir al equipo en 
                <span style="color: #04fc83;">VSHOW PRODUCTION</span>,
                un equipo
                compuesto por programadores, camarógrafos, diseñadores, entre otros, con el propósito de ofrecer a los
                VTubers soluciones
                a las limitaciones causadas por la falta de conocimiento, pudiendo así producir eventos de gran calidad.
                Así comenzó un proyecto desafiante, pero emocionante.
            </p>
        </div>

        <div class="image-container">
            <img class="photo-2" src="/quienes_somos_2.png" alt="" width="300" height="400">
            <picture class="image-1">
                <source srcset="/quienes-somos.webp" type="img/webp">
                <img class="photo-1" src="/quienes_somos.png" width="300">
            </picture>
            
        </div>
    </div>
    <div class="container">
        
        <div class="image-container">
          
            <picture class="image-1">
                <source srcset="/quienes-somos.webp" type="img/webp">
                <img style="margin-top: 50px;" class="photo-2" src="/que_hacemos.png" width="300">
            </picture>
            <img class="photo-1" style="top: -9%; margin-top: 50px;" src="/que_hacemos_2.png" alt="" width="300" height="400">
        </div>

        <div class="info-container left">
            <h1>¿Qué hacemos?</h1>
            <p>
                Nuestra misión es ofrecer una solución creativa a los creadores de contenido que, por falta de conocimiento,
                no pueden explotar el potencial de sus propios eventos y mejorar su presentación.
                <br><br>
                <span>Nuestro equipo se encarga de proporcionar soluciones como:</span>
            </p>

            <div style="text-align: center;">
                <router-link to="/servicios">VER MAS</router-link>
            </div>

            <p>
                De esta manera, ejecutamos todas las ideas del creador de contenido para que el evento cumpla todas las
                expectativas y brinde un excelente espectáculo. Nos encargamos de todo el trabajo técnico para que el
                creador pueda concentrarse en las ideas y propósitos del evento sin preocupaciones adicionales hasta el día
                del stream o video, y solo tenga que presionar "comenzar transmisión" o "grabar".
            </p>
        </div>


    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.info-container').forEach(container => {
        observer.observe(container);
    });

    onUnmounted(() => {
        observer.disconnect();
    });
});
</script>

<style lang="scss" scoped></style>