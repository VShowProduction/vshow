import { createApp } from 'vue'
// import { createAuth0 } from '@auth0/auth0-vue'
import App from './App.vue'
import router from './router'
import './sass/main.scss'
import './sass/card.scss'
import './sass/proyect.scss'
import './sass/contact.scss'
import './sass/services.scss'
import './sass/nosotros.scss'
import './sass/form.scss'


import 'animate.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faArrowUp, faLongArrowAltUp, faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,  faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { createPinia } from 'pinia'

const pinia = createPinia();

library.add (faSpinner, faTwitch, faTwitter, faUserSecret, faYoutube, faArrowUp, faLongArrowAltUp, faCheckCircle, faExclamationCircle)

const app = createApp(App);
app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
// app.use(createApp({
//     domain: import.meta.env.VITE_DOMAIN,
//     clientId:import.meta.env.VITE_CLIENTID,
//     authorizationParams: {
//         redirect_uri:import.meta.env.VITE_AUTH0_CALLBACK_URL,
//     },
// }));
app.mount('#app');

