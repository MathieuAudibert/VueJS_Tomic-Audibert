<template>
  
  <main>
    <section aria-labelledby="page-de-bienvenue">
      <h1 id="page-de-bienvenue">Bienvenue chez E-Coffee</h1>
      <p>Un voyage aromatique sans bouger de sa chaise</p>
      <!-- Vous pouvez remplacer le 'router-link' par un 'button' si vous préférez -->
      <router-link to="/shop" class="btn btn-primary">Visitez notre sélection</router-link>
    </section>

    <section aria-labelledby="produits-phare">
      <h2 id="produits-phare">Nos Produits Vedettes</h2>
      <Produits />
    </section>

    <!-- Vous pourriez avoir d'autres sections ici -->

  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

import Produits from '../components/Produits.vue';
</script>

<style scoped>
/* Vos styles personnalisés pour Home.vue ici */
.btn-primary {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>
