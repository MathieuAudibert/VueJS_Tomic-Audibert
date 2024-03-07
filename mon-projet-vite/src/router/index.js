import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Panier from '../pages/Panier.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/panier',
    name: 'panier',
    component: Panier
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
