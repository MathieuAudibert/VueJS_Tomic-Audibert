<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Produits from './components/Produits.vue';
import Footer from './components/footer.vue';
import AuthStore from './store/auth';

const authStore = useAuthStore();
authStore.initializeAuthState();
</script>
