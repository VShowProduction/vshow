import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import NextEventsView from '../views/NextEventsView.vue'
import ProyectsView from '../views/ProyectsView.vue'
import ProyectDetailView from '../views/ProyectDetailView.vue'
import ServicesView from '../views/ServicesView.vue'

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
  {
    path: '/proyectos/:id',  // Ruta dinámica con parámetro id
    name: 'proyectDetail',
    component: ProyectDetailView,  // Componente para mostrar detalles del proyecto
    props: true // Esto permite que el id sea pasado como prop al componente
  },
  {
    path: '/servicios',
    name: 'services',
    component: ServicesView, 
  },
]

const router = createRouter({
  history: createWebHistory('#'),
  routes
})

export default router
