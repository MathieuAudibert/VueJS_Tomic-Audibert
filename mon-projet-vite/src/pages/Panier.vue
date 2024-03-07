<template>
  <div>
    <h3>Mon Panier</h3>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.quantity }} x {{ item.price }} €
      </li>
    </ul>
    <button> Acheter </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);
</script>
<style scoped>
/* Style du conteneur principal */
div {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Style pour le titre du panier */
h3 {
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

/* Style de la liste des articles */
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

/* Style pour chaque article du panier */
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
}

/* Style du bouton 'Acheter' */
button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  text-align: center;
  text-decoration: none;
}

button:hover {
  background-color: #2980b9;
}
</style>
