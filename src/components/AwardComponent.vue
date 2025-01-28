<template>
  <transition name="slide-in">

    <div class="question-container" v-if="isToken">
      <div>
        <img src="/Award/premiosVITI.png" height="300x">
      </div>
      <div v-if="!finish && isLoading">
        <h1>Bienvenido a la votación por los ganadores de los Premios VITI</h1>
        <h4 style="font-style: italic;">*Para votar primero se debera loguear en twitch</h4>
      </div>
      <div v-else-if="isLoading">
        <h1>GRACIAS POR VOTAR, SU RESPUESTA HA SIDO ENVIADA EXITOSAMENTE</h1>
      </div>
      <div v-else>
        <h1>
          <font-awesome-icon :icon="['fas', 'spinner']" spin />
        </h1>
      </div>
      <div v-if="!finish && isLoading">
        <button class="twitch-button" @click="loginTwitch"><font-awesome-icon :icon="['fab', 'twitch']" />
          LOGIN</button>
      </div>
    </div>

    <div v-else>
      <div class="question-container" v-if="currentQuestion" :key="currentIndex">
        <div class="header-award">
          <img src="/Award/viti-flat.png" height="100">
          <h2>{{ currentQuestion.text }}</h2>
        </div>
        <div class="answers-container">
          <div v-for="(answer, index) in currentQuestion.answers" :key="index">
            <div 
            @click="selectAnswer(answer.name, currentQuestion.text, answer.id, currentQuestion.id)"
            :class="['answer', { selected: userAnswers[currentIndex] && userAnswers[currentIndex].respuesta === answer.name }]"
            :style="{ backgroundImage: `url(${answer.image})` }">
            <p>{{ answer.name }}</p>
          </div>
          <div class="link-container">
            <a target="_blank" v-if="currentIndex == 18" :href="answer.link"><font-awesome-icon :icon="['fas', 'link']" /><span>Ver Clip</span></a>
          </div>

          </div>
         
        </div>
        <div class="button-container">
          <button @click="backQuestion" v-if="currentIndex !== 0">Atras</button>
          <button @click="nextQuestion" v-if="!isLastQuestion">Siguiente</button>
          <button class="final-button" @click="submitAnswers" v-else :disabled="isDisabled"> 
            <span>Finalizar</span>
          </button>
        </div>
        <div>
          <font-awesome-icon v-if="!isLoading" :icon="['fas', 'spinner']" spin class="spinner" />
        </div>

      </div>
      </div>
  </transition>


  <Modal :showModal="showModal" :isError="errorModal" :message="textoModal" :isLoading="false"
        @cerrarModal="cerrarModal" />

</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import quest from '../assets/js/questions';
import { doc, setDoc, getDocs, collection, query, where, getCountFromServer } from 'firebase/firestore'
import { db } from '../assets/js/firebaseconect'
import exp from '../assets/js/twitch';
import { useRouter } from 'vue-router';


import Modal from './auxiliar/Modal.vue';


const accessToken = ref();
const isToken = ref(true);
const isLoading = ref(true);
const isDisabled = ref(false);
const route = useRouter();


const errorModal = ref();
const textoModal = ref('EMAIL ENVIADO CORRECTAMENTE');
const showModal = ref(false);

const loginTwitch = (() => {
  const clientId = exp.clientId;
  const redirectUri = exp.redirectUri;
  const responseType = 'token';
  const scopes = 'user:read:email'; // Ajusta los scopes según tus necesidades

  const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scopes)}`;
  window.location.href = authUrl;
})

const questions = ref();

onMounted(() => {
  extractTokenFromUrl();
  questions.value = quest.slice();
  currentQuestion.value = questions.value[currentIndex.value]

})

const userData = ref({});


const extractTokenFromUrl = (() => {
  const hash = window.location.hash;
  if (hash.includes('access_token')) {
    const tokenMatch = hash.match(/access_token=([^&]*)/);
    if (tokenMatch && tokenMatch[1]) {
      accessToken.value = tokenMatch[1];
      // window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
      handleFormAccess(accessToken.value)

      getUserData(accessToken.value).then((user) => {
        userData.value.name = user.display_name;
        userData.value.id = user.id
      });

    } else {
      console.log('Access token not found in hash');
    }
  }
})

async function getUserData(accessToken) {
  const response = await fetch('https://api.twitch.tv/helix/users', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Client-Id': '6sa57qvwm59nhaq4qi5blz9txl3g9m'
    }
  });
  const data = await response.json();
  return data.data[0]; // Devuelve el primer usuario (usuario autenticado)

}

async function handleFormAccess(accessToken) {
  const user = await getUserData(accessToken);
  const userId = user.id;

  // Crear una consulta para verificar si el userId ya existe
  const q = query(
    collection(db, "vitiAwards"),
    where("user.id", "==", userId)
  );

  try {

    isLoading.value = false;
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot)
    if (!querySnapshot.empty) {
      // El userId ya existe en la base de datos
      console.log('existe')
      finish.value = true;
      isToken.value = true;
    } else {
      console.log('no existe')

      // El userId no existe, puedes mostrar el formulario
      isToken.value = false;
    }
  } catch (error) {
    console.error("Error al verificar si el usuario ya completó el formulario:", error);
  }
  finally {
    isLoading.value = true;
  }
}



const currentIndex = ref(0);
const currentQuestion = ref();
const userAnswers = ref([]);
const finish = ref(false);
const resultado = ref();

const selectAnswer = (index, text, idRes, idCat) => {

  if (!userAnswers.value[currentIndex.value]) {
    userAnswers.value[currentIndex.value] = {};
  }

  if (text.endsWith(":")) {
    text = text.slice(0, -1);
  }
  // Guarda la respuesta
  userAnswers.value[currentIndex.value] = {
    categoria: text ? text : '',
    respuesta: index ? index : '',
    idRespuesta: idRes ? idRes : null,
    idCat: idCat ? idCat : null
  };
};

const nextQuestion = () => {
  currentIndex.value++;
  if(userAnswers.value[currentIndex.value]){
    
  }
  currentQuestion.value = questions.value[currentIndex.value];
};

const backQuestion = () => {
  currentIndex.value--;
  currentQuestion.value = questions.value[currentIndex.value];
};

const submitAnswers = async () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0'); // Día (2 dígitos)
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Mes (0-indexado, +1 para corregir)
  const year = today.getFullYear(); // Año completo

  isLoading.value = false;
  isDisabled.value = true;

  const formattedDate = `${day}/${month}/${year}`;

  // Suponiendo que las respuestas del usuario están en `userAnswers`
  var respuestas = userAnswers.value; // Ejemplo: ['ShuraHiwa', 'AmyDesu']

  respuestas = respuestas.filter(item => item !== undefined);
  // Objeto a enviar a Firebase
  const userResponse = {
    user: userData.value, // Asumiendo que accessToken contiene el ID del usuario
    respuestas: respuestas,
    fecha: formattedDate
  };

  try {

    const collectionRef = collection(db, "vitiAwards");
    const snapshot = await getCountFromServer(collectionRef);
    const total = snapshot.data().count + 1; // Total de documentos

    // const data = await getDocs(collection(db, "vitiAwards"));
    // resultado.value = data.docs
    //   .map(doc => ({ ...doc.data() }))
    // const total = resultado.value.length + 1;

    console.log(total);

    // Enviar las respuestas a la base de datos
    await setDoc(doc(db, "vitiAwards", total.toString()), userResponse);

    // Aquí se asume que el ID del usuario es el `accessToken`, pero puedes usar otro campo de ID si lo prefieres.
    // Puedes usar `accessToken.value` para crear un nombre único del documento en la colección "respuestas".

    // Después de enviar los datos
    revokeToken(accessToken);
    finish.value = true;
    isToken.value = true;

  } catch (e) {
    console.error(e);

    
    textoModal.value = "Hubo un error al enviar el formulario. Inténtalo nuevamente más tarde.";
        errorModal.value = true;
        showModal.value = true;
  } finally {
    isLoading.value = true;
    isDisabled.value = false;
  }
};

const isLastQuestion = computed(() => currentIndex.value === questions.value.length - 1);

const revokeToken = async (accessToken) => {
  const clientId = import.meta.env.VITE_TWITCH_KEY;
  const clientSecret = import.meta.env.VITE_TWITCH_SECRET;

  const url = `https://id.twitch.tv/oauth2/revoke?client_id=${clientId}&client_secret=${clientSecret}&token=${accessToken.value}`;

  try {
    const response = await fetch(url, {
      method: 'POST'
    });

    if (response.ok) {
      console.log("Token revocado correctamente");
    } else {
      const errorData = await response.json();
      console.error("Error al revocar el token:", errorData);
    }
  } catch (error) {
    console.error("Error en la solicitud de revocación:", error);
  }
};

const cerrarModal = () => {
    showModal.value = false
    route.push('/')
}
</script>
