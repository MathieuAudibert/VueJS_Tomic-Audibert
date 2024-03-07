<template>
  <div class="home-container">
    <main>
      <section class="welcome-section" aria-labelledby="page-de-bienvenue"> <!-- aria-labelledby = pr l'Aria (handicap) -->
        <h1 id="page-de-bienvenue">Bienvenue chez E-Coffee</h1>
        <p>Un voyage aromatique sans bouger de sa chaise</p>
        <router-link to="/selection" class="btn btn-primary">Visitez notre sélection</router-link>
      </section>

      <section class="featured-products" aria-labelledby="produits-phare"> <!-- aria-labelledby = pr l'Aria (handicap) -->
        <h2 id="produits-phare">Nos Produits Vedettes</h2>
        <Produits :maxProducts="3" />
      </section>

    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Produits from '../components/Produits.vue';
</script>

<style scoped>
.home-container {
  font-family: 'Arial', sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.welcome-section {
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-primary {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2980b9;
}

.featured-products {
  text-align: center; 
  padding: 20px;
  margin: auto;
}


.featured-products > * {
  margin: 0 auto;
}


.product-card {
  display: inline-block; 
  margin: 10px; 
  vertical-align: top; 
}


footer {
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
  margin-top: auto; 
}

.container {
  max-width: 1200px;
  margin: auto; 
}

</style>
