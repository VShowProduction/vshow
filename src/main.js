import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/main.scss'
import 'animate.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,  faTwitch } from '@fortawesome/free-brands-svg-icons';



library.add (faTwitch, faTwitter, faUserSecret)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');

