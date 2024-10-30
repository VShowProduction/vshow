<template>
    <div class="form-container">
        <h1>TRABAJA CON NOSOTROS</h1>
        <form action="" class="inputs-container" @submit.prevent="validarFormulario">
            <div class="form-input">
                <div class="info">Nombre/Nickname:</div>
                <InputText v-model="nickname" :invalid="!errores.nick" :disabled="isDisabled" @change="handleValid">
                </InputText>
                <small :class="{ 'error-message': true, 'hidden': errores.nick }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">Discord:</div>
                <InputText v-model="discord" :invalid="!errores.disc" :disabled="isDisabled" @change="handleValid">
                </InputText>
                <small :class="{ 'error-message': true, 'hidden': errores.disc }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Qué habilidades posee?: </div>
                <div class="group-container" v-for="hab of habilities" :key="hab.id">
                    <Checkbox v-model="habSelected" :inputId="hab.key" name="category" :value="hab.name"
                        @change="handleValid" />
                    <label :for="hab.key">{{ hab.name }}</label>
                </div>
                <small :class="{ 'error-message': true, 'hidden': errores.hab }" class="error-message">Este campo
                    es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">Experiencia:</div>
                <span>(Dejar links a portafolios/videos y hablar de la experiencia trabajando en otros proyectos)</span>
                <Textarea v-model="exp" rows="5" cols="30" style="resize: none" :invalid="!errores.exp"
                    @change="handleValid" />
                <small :class="{ 'error-message': true, 'hidden': errores.exp }" class="error-message">Este campo es
                    requerido.</small>
            </div>

            <div class="form-input">
                <div class="info">¿Por qué te interesa trabajar con nosotros?</div>
                <InputText v-model="whyWork" :invalid="!errores.wk" :disabled="isDisabled" @change="handleValid">
                </InputText>
                <small :class="{ 'error-message': true, 'hidden': errores.wk }" class="error-message">Este campo es
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
import Checkbox from 'primevue/checkbox';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';


import { ref, onMounted } from 'vue';
import axios from 'axios';

import Modal from './auxiliar/Modal.vue';

import { doc, setDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../assets/js/firebaseconect'

const habilities = ref([
    { name: "Modelado 3D", key: "M3D" },
    { name: "Animación 3D", key: "A3D" },
    { name: "Programación", key: "PR" },
    { name: "Edición de video", key: "EV" },
    { name: "VDJ", key: "VDJ" },
    { name: "DJ", key: "DJ" },
    { name: "Dancer", key: "DAN" },
    { name: "Camarografo", key: "CAM" },
    { name: "DMX ENGINER", key: "DMX" },
    { name: "Organizador", key: "ORG" },
    { name: "Community manager", key: "CM" },
]);

const habSelected = ref([]);

const errorModal = ref();
const textoModal = ref('EMAIL ENVIADO CORRECTAMENTE');
const showModal = ref(false);
const isLoading = ref(false);

const nickname = ref('');
const discord = ref('');
const exp = ref('');
const whyWork = ref('');

const errores = ref({});

const isDisabled = ref(false)

const handleValid = () => {
    errores.value.nick = nickname.value != '';
    errores.value.hab = habSelected.value.length > 0;
    errores.value.disc = discord.value !== '';
    errores.value.exp = exp.value !== '';
    errores.value.wk = whyWork.value !== '';
}

const validarFormulario = () => {
    errores.value.nick = nickname.value != '';
    errores.value.hab = habSelected.value.length > 0;
    errores.value.disc = discord.value !== '';
    errores.value.exp = exp.value !== '';
    errores.value.wk = whyWork.value !== '';

    const formEsValido = errores.value.nick && errores.value.hab && errores.value.disc && errores.value.exp &&
        errores.value.wk;

    if (formEsValido) {

        submitForm();


    } else {
        textoModal.value = "COMPLETE TODOS LOS CAMPOS OBLIGATORIOS"
        errorModal.value = true;
        showModal.value = true;
    }
}

const cerrarModal = () => {
    showModal.value = false
}

const submitForm = async () => {

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); // Día (2 dígitos)
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes (0-indexado, +1 para corregir)
    const year = today.getFullYear(); // Año completo

    const formattedDate = `${day}/${month}/${year}`;


    const soli = {
        Id: '',
        Nick: nickname.value,
        Discord: discord.value,
        Habilidades: habSelected.value,
        Experiencia: exp.value,
        WhyWork: whyWork.value,
        Fecha: formattedDate
    };

    let solis = ref();

    try {
        isDisabled.value = true;

        textoModal.value = "ENVIANDO SOLICITUD";
        errorModal.value = false;
        isLoading.value = true;
        showModal.value = true;

        const data = await getDocs(collection(db, "solicitudes"));
        solis.value = data.docs
            .map(doc => ({ ...doc.data() }))
        const total = solis.value.length + 1;

        soli.Id = total;

        await setDoc(doc(db, "solicitudes", total.toString()), soli)




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


const limpiarInputs = () => {
    nickname.value = '';
    discord.value = '';
    habSelected.value = [];
    exp.value = '',
    whyWork.value = '';
}

onMounted (() => {
    window.scrollTo({
        top: 0,
    })
})
</script>
