<template>
    <main>
    <section class="featured-products" aria-labelledby="produits-phare"> <!-- aria-labelledby = pr l'Aria (handicap) -->
        <h2 id="produits-phare">Nos Produits </h2>
        <useStore />
    </section>

    </main>
</template>


<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Produits from '../components/Produits.vue';
import useStore from '../components/useStore.vue';
</script>
