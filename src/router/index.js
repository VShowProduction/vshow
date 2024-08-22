import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import NextEventsView from '../views/NextEventsView.vue'
import ProyectsView from '../views/ProyectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacto',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/proximosEventos',
    name: 'nextEvents',
    component: NextEventsView
  },
  {
    path: '/proyectos',
    name: 'proyects',
    component: ProyectsView
  },
]

const router = createRouter({
  history: createWebHistory('#'),
  routes
})

export default router
