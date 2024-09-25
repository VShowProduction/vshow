<template>
  <div class="email-form">
    <h1>Contactanos</h1>
    <span style="color: red; margin-top: 10px;">Como recomendacion deje su email de contacto en el mensaje</span>
    <form @submit.prevent="enviarMail">
      <div class="input-container">
        <label for="from">Nombre:</label>
        <InputText id="from" v-model="name" :invalid="!nameValido" :disabled="isDisabled"/>
        <small :class="{ 'error-message': true, 'hidden': nameValido }" class="error-message">Este campo es
          requerido.</small>
      </div>
      <div class="input-container">
        <label for="subject">Asunto:</label>
        <InputText id="subject" v-model="subject" :invalid="!subjectValido" :disabled="isDisabled"/>
        <small :class="{ 'error-message': true, 'hidden': subjectValido }" class="error-message">Este campo es
          requerido.</small>
      </div>
      <div class="input-container">
        <label for="message">Mensaje:</label>
        <Textarea v-model="message" rows="5" cols="30" :invalid="!messageValido" :disabled="isDisabled"/>
        <small :class="{ 'error-message': true, 'hidden': messageValido }" class="error-message">Este campo es
          requerido.</small>
      </div>
      <div>
        <Button label="Enviar" type="submit" :disabled="isDisabled"></Button>
      </div>
    </form>
  </div>

  <Modal :showModal="showModal" :isError="errorModal" :message="textoModal" :isLoading="isLoading"
    @cerrarModal="cerrarModal" />
</template>

<script setup>
import { ref } from 'vue';
import { sendEmail } from '../assets/js/enviarMail.js'
import Modal from './auxiliar/Modal.vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';


const subject = ref('');
const message = ref('');
const name = ref('');
const email = ref('');

const subjectValido = ref(true);
const messageValido = ref(true);
const nameValido = ref(true)

const errorModal = ref();
const textoModal = ref('EMAIL ENVIADO CORRECTAMENTE');

const isDisabled = ref(false);
const isLoading = ref(false);

const showModal = ref(false);
const enviarMail = async () => {

  subjectValido.value = subject.value != '';
  messageValido.value = message.value !== '';
  nameValido.value = name.value !== '';

  const formValido = subjectValido.value && messageValido.value && nameValido.value;

  if (formValido) {

    try {
      isDisabled.value = true;

      textoModal.value = "ENVIANDO SOLICITUD";
      errorModal.value = false;
      isLoading.value = true;
      showModal.value = true;

      const response = await sendEmail(name.value, email.value, subject.value, message.value);

      if (response) {
        errorModal.value = false;
        showModal.value = true;


      } else {
        textoModal.value = "ERROR AL ENVIAR EL MAIL"
        errorModal.value = true;
        showModal.value = true;
      }
    } catch (e) {
      console.error(e)
      textoModal.value = "ERROR AL ENVIAR EL MAIL"
      errorModal.value = true;
      showModal.value = true;
    } finally {
      isDisabled.value = false;

      textoModal.value = "Formulario enviado correctamente";
      errorModal.value = false;
      showModal.value = true;
      isLoading.value = false;

      subject.value = '';
      message.value = '';
      name.value = '';
      email.value = '';
    }

  } else {
    textoModal.value = "COMPLETE TODOS LOS CAMPOS OBLIGATORIOS"
    errorModal.value = true;
    showModal.value = true;
  }

};

const cerrarModal = () => {
  showModal.value = false
}

</script>

<style lang="scss" scoped></style>
