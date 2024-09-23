<template>
    <div class="form-container">
        <h1>FORMULARIO DE INCRIPCION A LA VT WORLD CUP</h1>
        <img src="/LOGO_WC.png" alt="" height="300px">
        <form class="inputs-container"  @submit.prevent="validarFormulario">
            <div class="form-input">
            <div class="info">Nickname</div>
            <InputText v-model="nickName" :invalid="!nickValido"></InputText>
            <small :class="{'error-message': true, 'hidden': nickValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">Plataforma de streaming: </div>
            <div class="group-container">
            <label for="twitch">Twitch</label>
            <RadioButton v-model="radioPlataforma" inputId="twitch" name="twitch" value="Twitch" :invalid="!plataformaValido"/>
            <label for="youtube">Youtube</label>
            <RadioButton v-model="radioPlataforma" inputId="youtube" name="youtube" value="YouTube" :invalid="!plataformaValido"/>
            <label for="kick">Kick</label>
            <RadioButton v-model="radioPlataforma" inputId="kick" name="kick" value="Kick" :invalid="!plataformaValido"/>
            </div>
            <small :class="{'error-message': true, 'hidden': plataformaValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">País</div>
            <Select v-model="paisSeleccionado" editable :options="paises" optionLabel="name" placeholder="Seleccione un país" :invalid="!paisValido"></Select>
            <small :class="{'error-message': true, 'hidden': paisValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">¿Viste/Conoces acerca de la primera edición de la VT WORLD CUP?</div>
            <div class="group-container">
            <label for="si">Si</label>
            <RadioButton v-model="radioVt" inputId="si" name="si" value="Si" :invalid="!vtValido"/>
            <label for="no">No</label>
            <RadioButton v-model="radioVt" inputId="no" name="no" value="No" :invalid="!vtValido"/>      
            </div>  
            <small :class="{'error-message': true, 'hidden': vtValido}" class="error-message">Este campo es requerido.</small>  
        </div>

        <div class="form-input">
            <div class="info">¿Dispones del tiempo necesariop para participar del evento? (4/5 días de duracion)</div>
            <div class="group-container">
                <label for="si">Si</label>
                <RadioButton v-model="radioTiempoEvento" inputId="si" name="si" value="Si" :invalid="!tiempoEventoValido"/>
                <label for="no">No</label>
                <RadioButton v-model="radioTiempoEvento" inputId="no" name="no" value="No" :invalid="!tiempoEventoValido"/>   
            </div>
            <small :class="{'error-message': true, 'hidden': tiempoEventoValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">¿Dispones del tiempo para colaboar con toda la producción del marketing del evento?</div>
            <div class="group-container">
                <label for="si">Si</label>
                <RadioButton v-model="radioTiempoMarketing" inputId="si" name="si" value="Si" :invalid="!tiempoMarketingValido"/>
                <label for="no">No</label>
                <RadioButton v-model="radioTiempoMarketing" inputId="no" name="no" value="No" :invalid="!tiempoMarketingValido"/>   
            </div>
            <small :class="{'error-message': true, 'hidden': tiempoMarketingValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">    
            <div class="info">Estas dispuesto a un nivel de compromiso completo para asistir a dinámicas y demás tareas que el staff te pida (el horario de estas seria dispuesto por el staff)</div>
            <div class="group-container">
            <label for="si">Si</label>
            <RadioButton v-model="radioCompromiso" inputId="si" name="si" value="Si" :invalid="!compromisoValido"/>
            <label for="no">No</label>
            <RadioButton v-model="radioCompromiso" inputId="no" name="no" value="No" :invalid="!compromisoValido"/> 
            </div>
            <small :class="{'error-message': true, 'hidden': compromisoValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">¿Estas dispuesto a seguir cada una de las reglas que el torneo impondra de manera interna?</div>

            <div class="group-container">
            <label for="si">Si</label>
            <RadioButton v-model="radioReglas" inputId="si" name="si" value="Si" :invalid="!reglasValido"/>
            <label for="no">No</label>
            <RadioButton v-model="radioReglas" inputId="no" name="no" value="No" :invalid="!reglasValido"/> 
            </div>
            <small :class="{'error-message': true, 'hidden': reglasValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">¿Cuanto sueles jugar a Party Animals?</div>
            <div class="group-container">
            <label for="casual">Casualmente</label>
            <RadioButton v-model="radioTiempoJuego" inputId="casual" name="casual" value="Casualmente" :invalid="!tiempoJuegoValido"/>
            <label for="regular">Con regularidad</label>
            <RadioButton v-model="radioTiempoJuego" inputId="regular" name="regular" value="Con regularidad" :invalid="!tiempoJuegoValido"/> 
            <label for="mas">Más de lo que me gustaria</label>
            <RadioButton v-model="radioTiempoJuego" inputId="mas" name="mas" value="Más de lo que me gustaria" :invalid="!tiempoJuegoValido"/>
            </div>
            <small :class="{'error-message': true, 'hidden': tiempoJuegoValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">¿Dispones de un dispositov VR? (Index, Occulus, HTC, etc...)</div>
            <div class="group-container">
            <label for="si">Si</label>
            <RadioButton v-model="radioVR" inputId="si" name="si" value="Si" :invalid="!vrValido"/>
            <label for="no">No</label>
            <RadioButton v-model="radioVR" inputId="no" name="no" value="No" :invalid="!vrValido"/> 
            </div>
            <small :class="{'error-message': true, 'hidden': vrValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">¿Tienes buena comunicacíon con otros jugadores?</div>
            <div class="group-container">
            <label for="si">Si</label>
            <RadioButton v-model="radioComu" inputId="si" name="si" value="Si" :invalid="!comuValido"/>
            <label for="no">No</label>
            <RadioButton v-model="radioComu" inputId="no" name="no" value="No" :invalid="!comuValido"/> 
            </div>
            <small :class="{'error-message': true, 'hidden': comuValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">¿Te consideras una persona competitiva?</div>
            <div class="group-container">
            <label for="si">Si</label>
            <RadioButton v-model="radioCompe" inputId="si" name="si" value="Si" :invalid="!compeValido"/>
            <label for="no">No</label>
            <RadioButton v-model="radioCompe" inputId="no" name="no" value="No" :invalid="!compeValido"/> 
            </div>
            <small :class="{'error-message': true, 'hidden': compeValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">¿Te consideras una persona tóxica?</div>
            <div class="group-container">
            <label for="si">Si</label>
            <RadioButton v-model="radioToxi" inputId="si" name="si" value="Si" :invalid="!toxiValido"/>
            <label for="no">No</label>
            <RadioButton v-model="radioToxi" inputId="no" name="no" value="No" :invalid="!toxiValido"/> 
            </div>
            <small :class="{'error-message': true, 'hidden': toxiValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div  class="info">¿Tomarias el rol de capitán  de tu país?</div>
            <div class="group-container">
            <label for="si">Si</label>
            <RadioButton v-model="radioCapi" inputId="si" name="si" value="Si" :invalid="!capiValido"/>
            <label for="no">No</label>
            <RadioButton v-model="radioCapi" inputId="no" name="no" value="No" :invalid="!capiValido	"/> 
            </div>
            <small :class="{'error-message': true, 'hidden': capiValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">Twitter:</div>
            <InputText v-model="twitter" :invalid="!twitterValido"></InputText>
            <small :class="{'error-message': true, 'hidden': twitterValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <div class="info">Tu canal de streams:</div>
            <InputText v-model="canal" :invalid="!canalValido"></InputText>
            <small :class="{'error-message': true, 'hidden': canalValido}" class="error-message">Este campo es requerido.</small>
        </div>

        <div class="form-input">
            <Button label="Enviar" type="submit"></Button>
        </div>
        </form>
    </div>

    <Modal
      :showModal="showModal"
      :isError="errorModal"
      :message="textoModal"
      @cerrarModal="cerrarModal"
    />
</template>

<script setup>

import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import Button from 'primevue/button';


import { ref, onMounted } from 'vue';
import axios from 'axios';

import Modal from './auxiliar/Modal.vue';


const errorModal = ref();
const textoModal = ref('EMAIL ENVIADO CORRECTAMENTE');
const showModal = ref(false);

const nickName = ref('');
const radioPlataforma = ref('');
const paisSeleccionado = ref();
const paises = ref([]);
const radioVt = ref('');
const radioTiempoEvento = ref('');
const radioTiempoMarketing = ref('');
const radioCompromiso = ref('');
const radioReglas = ref('');
const radioTiempoJuego = ref('');
const radioVR = ref('');
const radioComu = ref('');
const radioCompe = ref('');
const radioToxi = ref('');
const radioCapi = ref('')
const twitter = ref('');
const canal = ref('');

const nickValido = ref(true);
const plataformaValido = ref(true);
const paisValido = ref(true);
const vtValido = ref(true);
const tiempoEventoValido = ref(true);
const tiempoMarketingValido = ref(true);
const compromisoValido = ref(true);
const tiempoJuegoValido = ref(true);
const reglasValido  = ref(true);
const vrValido  = ref(true);
const comuValido  = ref(true);
const compeValido  = ref(true);
const toxiValido  = ref(true);
const capiValido  = ref(true)
const twitterValido  = ref(true);
const canalValido  = ref(true);


const validarFormulario = () => {
    nickValido.value = nickName.value != '';
    plataformaValido.value = radioPlataforma.value !== '';
    paisValido.value = paisSeleccionado.value !== undefined;
    vtValido.value = radioVt.value !== '';
    tiempoEventoValido.value = radioTiempoEvento.value !== '';
    tiempoMarketingValido.value = radioTiempoMarketing.value !== '';
    compromisoValido.value = radioCompromiso.value !== '';
    tiempoJuegoValido.value = radioTiempoJuego.value !== '';
    reglasValido.value = radioReglas.value !== '';
    vrValido.value = radioVR.value !== '';
    comuValido.value = radioComu.value !== '';
    compeValido.value = radioCompe.value !== '';
    toxiValido.value = radioToxi.value !== '';
    capiValido.value = radioCapi.value !== '';
    twitterValido.value = twitter.value !== '';
    canalValido.value = canal.value !== '';

    const formEsValido = nickValido.value && plataformaValido.value && paisValido.value && vtValido.value &&
        tiempoEventoValido.value && tiempoMarketingValido.value && compromisoValido.value &&
        tiempoJuegoValido.value && reglasValido.value && vrValido.value && comuValido.value &&
        compeValido.value && toxiValido.value && capiValido.value && twitterValido.value &&
        canalValido.value;

        if (formEsValido) {
        // Acción a realizar si todos los campos son válidos
        console.log("Formulario válido, realizando acción...");

         }else {
            console.log('Error')
             textoModal.value = "COMPLETE TODOS LOS CAMPOS OBLIGATORIOS"
             errorModal.value = true;
             showModal.value = true;
         }
}

const cerrarModal = () => {
  showModal.value = false
}

onMounted( () => {

    axios.get('https://restcountries.com/v3.1/all')
         .then( response => {
            response.data.forEach((e, index) => {
                paises.value[index] = {
                    name: e.name.common,
                    id: index,
                }
            });

            paises.value.sort((a, b) => a.name.localeCompare(b.name));
        })
})

</script>

<style lang="scss" scoped>

</style>