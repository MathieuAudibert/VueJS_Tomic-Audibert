<template>
  <div class="product-card">
    <img :src="product.imageUrl" alt="Product image" class="product-image">
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} €</p>
      <button @click="addToCart">Ajouter au panier</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useCartStore } from '../store/cart'; 

const props = defineProps({
  product: Object
});

const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart(props.product);
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px; 
}

.product-wrapper {
  flex-basis: calc(33.3% - 20px);
  max-width: calc(33.3% - 20px);
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  display: block; 
  height: auto;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  margin: 10px 0;
  color: #333;
}

.product-info p {
  color: #555;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

button:hover {
  background-color: #2980b9;
}
</style>
