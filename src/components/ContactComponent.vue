<template>
  <div class="email-form">
    <h1>Contactanos</h1>
    <span>Como recomendacion deje su email de contacto en el mensaje</span>
    <span style="color: red; margin-top: 10px;">*No esta activado*</span>
    <form @submit.prevent="enviarMail">
      <div class="input-container">
        <label for="from">Nombre:</label>
        <input type="text" id="from"  v-model="name"  />
      </div>
      <div class="input-container">
        <label for="subject">Asunto:</label>
        <input id="subject" v-model="subject"  />
      </div>
      <div class="input-container">
        <label for="message">Mensaje:</label>
        <textarea id="message"  v-model="message" ></textarea>
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>

  <Modal
      :showModal="showModal"
      :isError="errorModal"
      message="EMAIL ENVIADO CORRECTAMENTE"
      @cerrarModal="cerrarModal"
    />

    <Modal
      :showModal="showModal"
      :isError="errorModal"
      message="HUBO UN ERROR AL ENVIAR EL EMAIL"
      @cerrarModal="cerrarModal"
    />
</template>

<script setup>
import { ref } from 'vue';
import {sendEmail} from '../assets/js/enviarMail.js'
import Modal from './auxiliar/Modal.vue';

const subject = ref('');
const message = ref('');
const name = ref('');

const errorModal = ref()

const showModal = ref(false);
const enviarMail = async () => {
  // const response = await sendEmail(name.value, email.value, subject.value, message.value);
  const response = true;

  if(response){
    errorModal.value = false;
    showModal.value = true;
  }else {
    errorModal.value = true;
    showModal.value = true;
  }
};

const cerrarModal = () => {
  showModal.value = false
}

</script>

<style lang="scss" scoped></style>
