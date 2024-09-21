import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './sass/main.scss'
import './sass/card.scss'
import './sass/proyect.scss'
import './sass/contact.scss'
import './sass/services.scss'
import './sass/nosotros.scss'

import 'animate.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faArrowUp, faLongArrowAltUp, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,  faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';




library.add (faTwitch, faTwitter, faUserSecret, faYoutube, faArrowUp, faLongArrowAltUp, faCheckCircle, faExclamationCircle)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');

