<template>
    <div class="form-container">
        <h1>FORMULARIO DE INCRIPCION A LA VT WORLD CUP</h1>
        <img src="/LOGO_WC.png" alt="" height="300px">
        <form class="inputs-container" @submit.prevent="validarFormulario">
            <div class="form-input">
                <div class="info">Nickname</div>
                <InputText v-model="nickName" :invalid="!nickValido" :disabled="isDisabled"></InputText>
                <small :class="{ 'error-message': true, 'hidden': nickValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">Plataforma de streaming: </div>
                <div class="group-container">
                    <label for="twitch">Twitch</label>
                    <RadioButton v-model="radioPlataforma" inputId="twitch" name="twitch" value="Twitch"
                        :invalid="!plataformaValido" :disabled="isDisabled" />
                    <label for="youtube">Youtube</label>
                    <RadioButton v-model="radioPlataforma" inputId="youtube" name="youtube" value="YouTube"
                        :invalid="!plataformaValido" :disabled="isDisabled" />
                    <label for="kick">Kick</label>
                    <RadioButton v-model="radioPlataforma" inputId="kick" name="kick" value="Kick"
                        :invalid="!plataformaValido" :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': plataformaValido }" class="error-message">Este campo
                    es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">País</div>
                <Select v-model="paisSeleccionado" :options="paises" optionLabel="name" placeholder="Seleccione un país"
                    :invalid="!paisValido" :disabled="isDisabled"></Select>
                <small :class="{ 'error-message': true, 'hidden': paisValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Viste/Conoces acerca de la primera edición de la VT WORLD CUP?</div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioVt" inputId="si" name="si" value="Si" :invalid="!vtValido"
                        :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioVt" inputId="no" name="no" value="No" :invalid="!vtValido"
                        :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': vtValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Dispones del tiempo necesario para participar del evento? (4/5 días de duracion)
                </div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioTiempoEvento" inputId="si" name="si" value="Si"
                        :invalid="!tiempoEventoValido" :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioTiempoEvento" inputId="no" name="no" value="No"
                        :invalid="!tiempoEventoValido" :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': tiempoEventoValido }" class="error-message">Este campo
                    es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Dispones del tiempo para colaborar con toda la producción del marketing del evento?
                </div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioTiempoMarketing" inputId="si" name="si" value="Si"
                        :invalid="!tiempoMarketingValido" :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioTiempoMarketing" inputId="no" name="no" value="No"
                        :invalid="!tiempoMarketingValido" :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': tiempoMarketingValido }" class="error-message">Este
                    campo
                    es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">Estas dispuesto a un nivel de compromiso completo para asistir a dinámicas y demás
                    tareas
                    que el staff te pida (el horario de estas seria dispuesto por el staff)</div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioCompromiso" inputId="si" name="si" value="Si"
                        :invalid="!compromisoValido" :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioCompromiso" inputId="no" name="no" value="No"
                        :invalid="!compromisoValido" :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': compromisoValido }" class="error-message">Este campo
                    es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Estas dispuesto a seguir cada una de las reglas que el torneo impondra de manera
                    interna?
                </div>

                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioReglas" inputId="si" name="si" value="Si" :invalid="!reglasValido"
                        :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioReglas" inputId="no" name="no" value="No" :invalid="!reglasValido"
                        :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': reglasValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Cuanto sueles jugar a Party Animals?</div>
                <div class="group-container">
                    <label for="casual">Casualmente</label>
                    <RadioButton v-model="radioTiempoJuego" inputId="casual" name="casual" value="Casualmente"
                        :invalid="!tiempoJuegoValido" :disabled="isDisabled" />
                    <label for="regular">Con regularidad</label>
                    <RadioButton v-model="radioTiempoJuego" inputId="regular" name="regular" value="Con regularidad"
                        :invalid="!tiempoJuegoValido" :disabled="isDisabled" />
                    <label for="mas">Más de lo que me gustaria</label>
                    <RadioButton v-model="radioTiempoJuego" inputId="mas" name="mas" value="Más de lo que me gustaria"
                        :invalid="!tiempoJuegoValido" :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': tiempoJuegoValido }" class="error-message">Este campo
                    es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Dispones de un dispositov VR? (Index, Oculus, HTC, etc...)</div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioVR" inputId="si" name="si" value="Si" :invalid="!vrValido"
                        :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioVR" inputId="no" name="no" value="No" :invalid="!vrValido"
                        :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': vrValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Tienes buena comunicacíon con otros jugadores?</div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioComu" inputId="si" name="si" value="Si" :invalid="!comuValido"
                        :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioComu" inputId="no" name="no" value="No" :invalid="!comuValido"
                        :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': comuValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Te consideras una persona competitiva?</div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioCompe" inputId="si" name="si" value="Si" :invalid="!compeValido"
                        :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioCompe" inputId="no" name="no" value="No" :invalid="!compeValido"
                        :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': compeValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Te consideras una persona tóxica?</div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioToxi" inputId="si" name="si" value="Si" :invalid="!toxiValido"
                        :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioToxi" inputId="no" name="no" value="No" :invalid="!toxiValido"
                        :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': toxiValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Tomarias el rol de capitán de tu país?</div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="radioCapi" inputId="si" name="si" value="Si" :invalid="!capiValido"
                        :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="radioCapi" inputId="no" name="no" value="No" :invalid="!capiValido"
                        :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': capiValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Estarias dispuesto a ser suplente para tu equipo?</div>
                <div class="group-container">
                    <label for="si">Si</label>
                    <RadioButton v-model="suplente" inputId="si" name="si" value="Si" :invalid="!suplenteValido"
                        :disabled="isDisabled" />
                    <label for="no">No</label>
                    <RadioButton v-model="suplente" inputId="no" name="no" value="No" :invalid="!suplenteValido"
                        :disabled="isDisabled" />
                </div>
                <small :class="{ 'error-message': true, 'hidden': capiValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">Twitter:</div>
                <InputText v-model="twitter" :invalid="!twitterValido" :disabled="isDisabled"></InputText>
                <small :class="{ 'error-message': true, 'hidden': twitterValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">Tu canal de streams:</div>
                <InputText v-model="canal" :invalid="!canalValido" :disabled="isDisabled"></InputText>
                <small :class="{ 'error-message': true, 'hidden': canalValido }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <Button label="Enviar" type="submit" :disabled="isDisabled"></Button>
            </div>
        </form>
    </div>

    <Modal :showModal="showModal" :isError="errorModal" :message="textoModal" :isLoading="isLoading"
        @cerrarModal="cerrarModal" />
</template>

<script setup>

import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import Button from 'primevue/button';

import { ref, onMounted } from 'vue';
import axios from 'axios';

import Modal from './auxiliar/Modal.vue';

import { doc, setDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../assets/js/firebaseconect'

const errorModal = ref();
const textoModal = ref('EMAIL ENVIADO CORRECTAMENTE');
const showModal = ref(false);
const isLoading = ref(false);

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
const suplente = ref('');

const nickValido = ref(true);
const plataformaValido = ref(true);
const paisValido = ref(true);
const vtValido = ref(true);
const tiempoEventoValido = ref(true);
const tiempoMarketingValido = ref(true);
const compromisoValido = ref(true);
const tiempoJuegoValido = ref(true);
const reglasValido = ref(true);
const vrValido = ref(true);
const comuValido = ref(true);
const compeValido = ref(true);
const toxiValido = ref(true);
const capiValido = ref(true)
const twitterValido = ref(true);
const canalValido = ref(true);
const suplenteValido = ref(true)

const isDisabled = ref(false)

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
    suplenteValido.value = suplente.value !== '';

    const formEsValido = nickValido.value && plataformaValido.value && paisValido.value && vtValido.value &&
        tiempoEventoValido.value && tiempoMarketingValido.value && compromisoValido.value &&
        tiempoJuegoValido.value && reglasValido.value && vrValido.value && comuValido.value &&
        compeValido.value && toxiValido.value && capiValido.value && twitterValido.value &&
        canalValido.value && suplenteValido.value;

    if (formEsValido) {

        submitForm();


    } else {
        textoModal.value = "COMPLETE TODOS LOS CAMPOS OBLIGATORIOS"
        errorModal.value = true;
        showModal.value = true;
    }
}

const submitForm = async () => {

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); // Día (2 dígitos)
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes (0-indexado, +1 para corregir)
    const year = today.getFullYear(); // Año completo

    const formattedDate = `${day}/${month}/${year}`;


    const inscripcion = {
        Id: '',
        NickName: nickName.value,
        Plataforma: radioPlataforma.value,
        Pais: paisSeleccionado.value,
        ConoceVT1: radioVt.value,
        TiempoEvento: radioTiempoEvento.value,
        TiempoMarketing: radioTiempoMarketing.value,
        Comprometido: radioCompromiso.value,
        ReglasAccept: radioReglas.value,
        TiempoJuego: radioTiempoJuego.value,
        TieneVR: radioVR.value,
        Comunicacion: radioComu.value,
        Competitivo: radioCompe.value,
        Toxico: radioToxi.value,
        Capitan: radioCapi.value,
        Twitter: twitter.value,
        Canal: canal.value,
        Suplente: suplente.value,
        Fecha: formattedDate
    };

    let inscripciones = ref();

    try {
        isDisabled.value = true;

        textoModal.value = "ENVIANDO SOLICITUD";
        errorModal.value = false;
        isLoading.value = true;
        showModal.value = true;

        const data = await getDocs(collection(db, "inscripciones"));
        inscripciones.value = data.docs
            .map(doc => ({ ...doc.data() }))
        const total = inscripciones.value.length + 1;

        inscripcion.Id = total;

        await setDoc(doc(db, "inscripciones", total.toString()), inscripcion)




    } catch (e) {
        console.error(e)

        textoModal.value = "Hubo un error al enviar el formulario. Inténtalo nuevamente.";
        errorModal.value = true;
        showModal.value = true;
    }
    finally {
        isDisabled.value = false;

        textoModal.value = "Formulario enviado correctamente";
        errorModal.value = false;
        showModal.value = true;
        isLoading.value = false;

        limpiarInputs();
    }

}

const cerrarModal = () => {
    showModal.value = false
}


const limpiarInputs = () => {
    nickName.value = '';
    radioPlataforma.value = '';
    paisSeleccionado.value = null;
    radioVt.value = '';
    radioTiempoEvento.value = '';
    radioTiempoMarketing.value = '';
    radioCompromiso.value =
        radioReglas.value = '';
    radioTiempoJuego.value = '';
    radioVR.value = '';
    radioComu.value = '';
    radioCompe.value = '';
    radioToxi.value = '';
    radioCapi.value = '';
    twitter.value = '';
    canal.value = '';
}

onMounted(() => {

    axios.get('https://restcountries.com/v3.1/all?fields=name')
        .then(response => {
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

<style lang="scss" scoped></style>