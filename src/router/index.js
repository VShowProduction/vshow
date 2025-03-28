import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import NextEventsView from '../views/NextEventsView.vue'
import ProyectsView from '../views/ProyectsView.vue'
import ProyectDetailView from '../views/ProyectDetailView.vue'
import ServicesView from '../views/ServicesView.vue'
import FormularioView from '../views/FormularioView.vue'
import RegistrosView from '../views/RegistrosView.vue'
import LoginView from '../views/LoginView.vue'
import { useUserStore } from '../store/userStore'
import WorkingView from '../views/WorkingView.vue'
import SolicitudesView from '../views/SolicitudesView.vue'
import AwardView from '../views/AwardView.vue'
import VotesView from '../views/VotesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/contacto',
  //   name: 'contact',
  //   component: ContactView
  // },
  // {
  //   path: '/proximosEventos',
  //   name: 'nextEvents',
  //   component: NextEventsView
  // },
  // {
  //   path: '/proyectos',
  //   name: 'proyects',
  //   component: ProyectsView
  // },
  // {
  //   path: '/proyectos/:id',  // Ruta dinámica con parámetro id
  //   name: 'proyectDetail',
  //   component: ProyectDetailView,  // Componente para mostrar detalles del proyecto
  //   props: true // Esto permite que el id sea pasado como prop al componente
  // },
  // {
  //   path: '/servicios',
  //   name: 'services',
  //   component: ServicesView, 
  // },
  // // {
  // //   path: '/FormularioWorldCup',
  // //   name: 'formulario',
  // //   component: FormularioView, 
  // // },
  {
    path: '/login',
    name: 'Login',
    component: LoginView, 
  },
  // {
  //   path: '/Registros',
  //   name: 'Registros',
  //   component: RegistrosView,
  //   meta: { requiresAuth: true }  // Ruta protegida
  // },
  // {
  //   path: '/Unete',
  //   name: 'unete',
  //   component: WorkingView, 
  // },
  {
    path: '/VotosViti',
    name: 'VotosViti',
    component: VotesView,
    meta: { requiresAuth: true }  // Ruta protegida
  },
  {
    path: '/:pathMatch(.*)*',  // Ruta comodín para redirigir a la página de inicio
    redirect: { name: 'home' }
  },
  {
    path: '/VitiAwards',
    name: 'VitiAwards',
    component: AwardView,
  }
]

const router = createRouter({
  history: createWebHistory('#'),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useUserStore();

  const isAuthenticated = store.isLoged; // o tu sistema de autenticación
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
