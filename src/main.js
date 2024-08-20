import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/main.scss'
import 'animate.css';




const app = createApp(App);
app.use(router);
app.mount('#app');

