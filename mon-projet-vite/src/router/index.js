import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Panier from '../pages/Panier.vue';
import Connexions from '../pages/Connexions.vue';
import NotFound from '../pages/NotFound.vue';
import Inscription from '../components/Inscription.vue';
import Selection from '../pages/Selection.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/panier',
    name: Panier,
    component: Panier
  },
  { path: '/connexion',
    name : Connexions,
    component: Connexions 
  },
  { path: '/inscription',
    name: Inscription,
    component: Inscription

  },
  { path: '/selection',
    name: Selection,
    component: Selection

  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound },
  
  

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
