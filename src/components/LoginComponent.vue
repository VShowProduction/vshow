<template>
    <div class="form-container">
        <form class="inputs-container">
            <div class="form-input">
                <div class="info">Usuario</div>
                <InputText v-model="name" />
            </div>
            <div class="form-input">
                <div class="info">Contraseña</div>
                <Password v-model="pass" :feedback="false" toggleMask />
            </div>
            <div class="form-input">
                <Button label="LOGIN" @click="login()"></Button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/userStore';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../assets/js/firebaseconect'
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useUserStore();
const userData = ref();
const name = ref();
const pass = ref();

onMounted(async () => {

})

const login = async () => {

    if (name.value && pass.value) {
        try {
            // await auth0Client.value.loginWithPopup({});
            const users = await getDocs(collection(db, "users"));
            userData.value = users.docs
                .map(doc => ({ ...doc.data() }))
                userData.value.forEach(u => {
                if (u.user === name.value && u.pass === pass.value) {
                    store.isLoged = true;

                    router.push('/Unete')
                }
            });
        } catch (e) {
            console.error(e);
        }

    }


}

</script>

<style lang="scss" scoped></style>