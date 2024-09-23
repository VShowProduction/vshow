<template>
    <div class="form-container">
        <div class="form-input">
            <div>Nickname</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>Plataforma de streaming: </div>
            <label for="si">Si</label>
            <RadioButton v-model="radioPlataforma" inputId="si" name="Si" value="Si" />

            <label for="no">No</label>
            <RadioButton v-model="radioPlataforma" inputId="no" name="No" value="No" />
        </div>

        <div class="form-input">
            <div>País</div>
            <Select v-model="paisSeleccionado" editable :options="paises" optionLabel="name" placeholder="Seleccione un país"></Select>
        </div>

        <div class="form-input">
            <div>¿Viste/Conoces acerca de la primera edición de la VT WORLD CUP?</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>¿Dispones del tiempo para colaboar con toda la producción del marketing del evento?</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>Estas dispuesto a un nivel de compromiso completo para asistir a dinámicas y demás tareas que el staff te pida (el horario de estas seria dispuesto por el staff)</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>¿Estas dispuesto a seguir cada una de las reglas que el torneo impondra de manera interna?</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>¿Cuanto sueles jugar a partu animals?</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>¿Dispones de un dispositov VR? (Index, Occulus, HTC, etc...)</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>¿Tienes buena comunicacíon con otros jugadores?</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>¿Te consideras una persona competitiva?</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>¿Te consideras una persona tóxica?</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>¿Tomarias el rol de capitán  de tu país?</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>Twitter:</div>
            <InputText></InputText>
        </div>

        <div class="form-input">
            <div>Tu canal de streams:</div>
            <InputText></InputText>
        </div>
    </div>
</template>

<script setup>

import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';

import { ref, onMounted } from 'vue';
import axios from 'axios';

const nickName = ref();
const radioPlataforma = ref();
const paisSeleccionado = ref();
const paises = ref([]);
const radioVt = ref();
const radioTiempoEvento = ref();
const radioTiempoMarketing = ref();
const radioCompromiso = ref();
const radioReglas = ref();
const radioTiempoJuego = ref();
const radioVR = ref();
const radioComu = ref();
const radioCOmpe = ref();
const radioToxi = ref();
const radioCapi = ref()
const twitter = ref();
const canal = ref();

onMounted( () => {

    axios.get('https://restcountries.com/v3.1/all')
         .then( response => {
            
            // console.log(response.data)

            response.data.forEach((e, index) => {
                paises.value[index] = {
                    name: e.name.common,
                    id: index,
                }
            });

            paises.value.sort((a, b) => a.name.localeCompare(b.name));


            console.log(paises.value) 
        })
})

</script>

<style lang="scss" scoped>

</style>