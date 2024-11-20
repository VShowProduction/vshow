<template>
    <div>
        <button @click="loginTwitch">Twitch</button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const accessToken = ref();; 

 const loginTwitch = (() => {
    const clientId = '6sa57qvwm59nhaq4qi5blz9txl3g9m';
    const redirectUri = 'http://localhost:5173/vshow/#/PremiosVITI';
    const responseType = 'token';
    const scopes = 'user:read:email'; // Ajusta los scopes según tus necesidades

    const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = authUrl;
  })

  onMounted( () => {
    extractTokenFromUrl();
  })


  const extractTokenFromUrl = ( async () =>{
    const hash = window.location.hash;
    if (hash.includes('access_token')) {
        console.log('Hash detected:', hash);
        const tokenMatch = hash.match(/access_token=([^&]*)/);
        if (tokenMatch && tokenMatch[1]) {
            accessToken.value = tokenMatch[1];
            console.log('Extracted Token:', accessToken.value);
            window.history.replaceState(null, document.title, window.location.pathname + window.location.search);

            const user = await getUserData(accessToken.value);
            
            console.log('usuari',user);

            console.log('Nombre', user.display_name)
            console.log('Id', user.id);
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

    // Aquí puedes verificar si el usuario ya está en la base de datos
    // const alreadyFilled = await checkIfUserFilledForm(userId);

    if (alreadyFilled) {
        alert("Ya has completado este formulario.");
    } else {
        // Mostrar formulario
    }
}
</script>

<style scoped>

</style>