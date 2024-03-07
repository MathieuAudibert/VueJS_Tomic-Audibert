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
import { useAuthStore } from './store/auth';

const authStore = useAuthStore();
authStore.initializeAuthState();
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex-grow: 1;
} 

main {
  flex: 1;
  padding-bottom: 60px; 
  
}

footer {
  position: sticky;
  bottom: 0;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
}
</style>
