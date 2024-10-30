<template>
    <div class="grid-container">
        <div v-for="(w, index) in we" :key="index" >
            <div class="we-container" :class="{ 'reverse-layout': index % 2 !== 0 }">
                <div class="we-info">
                    <h1>{{ w.titulo }}</h1>
                    <p>
                        {{ w.texto }}

                    </p>
                    <p v-if="w.texto2">
                        {{ w.texto2 }}

                    </p>
                    <p v-if="w.texto3">
                        {{ w.texto3 }}

                    </p>

                    <div style="display: flex; justify-content: center;">
                        <div class="twitter"><a :href="w.tw" target="_blank"><font-awesome-icon
                                :icon="['fab', 'twitter']" /></a></div>
                                
                    <div v-if="w.tw2" class="twitter"><a :href="w.tw2" target="_blank"><font-awesome-icon
                                :icon="['fab', 'twitter']" /></a></div>

                                
                    <div v-if="w.tw3" class="twitter"><a :href="w.tw3" target="_blank"><font-awesome-icon
                                :icon="['fab', 'twitter']" /></a></div>

                                
                    <div v-if="w.tw4" class="twitter"><a :href="w.tw4" target="_blank"><font-awesome-icon
                                :icon="['fab', 'twitter']" /></a></div>
                    </div>


                </div>

                <div>
                    <div class="we-img">
                        <img :src="w.img" height="600px">
                    </div>
                </div>
            </div>

            <div v-if="index !== we.length - 1" class="line-bottom"></div>

        </div>

    </div>

</template>

<script setup>

import { ref } from 'vue';

const we = ref(
    [
        {
            titulo: 'TECNOANIME',
            img: '/vshow/TecnO.png',
            texto: 'TecnoAnime es el CEO y fundador de "VSHOW PRODUCTION", un proyecto de Vtuber dedicado a la realidad virtual. Tomó la decisión de utilizar todo su conocimiento en esta área para comenzar un nuevo proyecto tras el éxito de la "Vtuber World Cup 2023". Junto a parte de su equipo de moderación y otros miembros con diversas habilidades, busca elevar el nivel de las producciones hispanas de Vtubers.',
            texto2: 'Después de ganar el premio al "mejor evento Vtuber del año" en 2023, Tecno se cuestionó la validez de este reconocimiento. Al analizar eventos y actividades de otros Vtubers, especialmente en "3D", llegó a la conclusión de que la mayoría de los eventos están mal ejecutados o carecen de producción debido a la "falta de conocimiento" en áreas como 3D, programación, música y realidad virtual.',
            texto3: 'Por lo tanto, TecnoAnime decidió reunir un equipo para ofrecer soluciones a cada streamer que quiera enfrentar estos desafíos sin tener conocimientos previos. Así nació VSHOW PRODUCTION, un equipo que trabajaría en secreto a modo de experimento en diversos eventos, tales como: Pencast, Vtuber Show Content, Vt League, y finalmente haciendo su debut oficial con "FVF" (Freestyle Virtual Fights), Charming Melodies (concierto Meltyhitoru) y el gran anuncio de la VTUBER WORLD CUP 2024.',
            tw: 'https://x.com/TecnoAnime'
        },

        {
            titulo: 'GABO',
            img: '/vshow/Gabo.png',
            texto: 'Gabo es editor y diseñador digital con experiencia en la creación de gráficos para eventos, marcas y creadores de contenido.',
            texto2: 'Ha trabajado para varios creadores, como AYAKA ZAPHYR, CHAINAVT y TECNOANIME, destacándose por la gran calidad de sus trabajos, tanto en edición de video como en imágenes.',
            texto3: 'Es el diseñador de los logotipos oficiales de VSHOW y de algunos de sus eventos, como VT WORLD CUP 2024 y VT LEAGUE. Además, es responsable de crear gran parte de la línea gráfica y la publicidad de estos eventos.',
            tw: 'https://x.com/HiGaboo_'
        },

        {
            titulo: 'LIVE DIMENSIONS',
            img: '/vshow/Live.png',
            texto: 'LiveDimensions es un conocido y experimentado programador que ha trabajado en una gran cantidad de proyectos, destacándose principalmente por su labor en "Project Aincrad", el proyecto que busca llevar SWORD ART ONLINE a la realidad virtual, específicamente en VRCHAT.',
            texto2: 'Su talento excepcional ha servido al equipo para desarrollar numerosas herramientas que cumplen con el nivel de producción requerido, tales como un sistema de cámaras funcional similar al de OBS y la televisión profesional, así como un sistema de iluminación para luces de escenario, entre otras programaciones en C# que el equipo necesita durante los proyectos.',
            texto3: 'Su talento excepcional abre posibilidades al equipo, brindando soluciones que normalmente serían difíciles de alcanzar.',
            tw: 'https://x.com/LiveDimensions',
        },

        {
            titulo: 'DAZER0',
            img: '/vshow/DAZER.png',
            texto: 'Dazer0 siempre ha estado relacionado con la comunidad inglesa e hispana en la producción de eventos de música electrónica en VRCHAT. Como miembro del conocido Club LSPOT, su conocimiento y cercanía al mundo Vtuber aportan grandes opciones al equipo.',
            texto2: 'Desempeña funciones como Broadcaster Producer, trabajando en gráficos y overlays en tiempo real, así como en la proyección de video y música en entornos 3D.',
            texto3: 'Además, cuenta con habilidades adicionales como DJ, lo que amplía las posibilidades musicales dentro de cada evento.',
            tw: 'https://x.com/dazer0'
        },

        {
            titulo: 'LYROY34',
            img: '/vshow/lyroy.png',
            texto: 'Lyroy es uno de los principales motores del funcionamiento de los eventos. Cuenta con habilidades de programación, pero sobre todo de liderazgo, lo que le permite organizar y ejecutar acciones en equipo durante las producciones.',
            texto2: 'Actualmente, se desempeña principalmente como director de cámaras, organizando y decidiendo qué perspectivas se mostrarán durante las emisiones en directo.',
            texto3: 'Sin embargo, su versatilidad le permite cubrir prácticamente cualquier función dentro del equipo.',
            tw: 'https://x.com/Lyroy34',
        },

        
        {
            titulo: 'CERREBASS | AÚRA | BRANDREK | KITO',
            img: '/vshow/TEAM.png',
            texto: 'Este es el equipo de VSHOW encargado de darle vida a los eventos en directo, así como de apoyar grabaciones y otras funciones.',
            texto2: 'Sus principales funciones dentro del equipo son el uso de cámaras; sin embargo, el equipo es lo suficientemente versátil para ejecutar diversas tareas, como el control de iluminación, la música, la organización e incluso actuar como actores de cuerpo completo.',
            texto3: 'Sin duda, son el motor de cada evento, sobre todo para las transmisiones en vivo.',
            tw: 'https://x.com/CerrebassVT',
            tw3: 'https://x.com/BrandrekM',
            tw4: 'https://x.com/Oxi_kt',
        },

        {
            titulo: 'VOMORI',
            img: '/vshow/Vomo.png',
            texto: 'Vomori es una modeladora 3D que colabora con Vshow, donde se encarga de diseñar y modelar elementos tridimensionales para los eventos.',
            texto2: 'Trabaja en estrecha colaboración con el equipo creativo y utiliza su destreza en software de modelado para asegurar que cada evento sea único y memorable.',
            texto3: 'Su pasión por el diseño la convierte en una pieza clave en el proceso.',
            tw: 'https://x.com/VomoriHiko',
        },
        
        
        

    ]
);

</script>

<style lang="scss" scoped></style>