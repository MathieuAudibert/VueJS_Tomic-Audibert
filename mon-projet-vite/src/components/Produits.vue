<template>
    <section class="products">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </section>
  </template>
  
  <script setup>
  import ProductCard from './ProductCard.vue';
  import { ref } from 'vue';
  
  const products = ref([
    { id: 1, name: 'Café Arabica', price: 7.99, imageUrl: 'https://lacaravelleverte.com/wp-content/uploads/2020/08/cafe-arabica-120g-cafecacao-caravelleweb.jpg' },
    { id: 2, name: 'Café baba', price: 9.00, imageUrl: 'https://lacaravelleverte.com/wp-content/uploads/2020/08/cafe-arabica-120g-cafecacao-caravelleweb.jpg' },
    { id: 3, name: 'Café caca', price: 9.00, imageUrl: 'https://lacaravelleverte.com/wp-content/uploads/2020/08/cafe-arabica-120g-cafecacao-caravelleweb.jpg' },
    

]);
  
  const handleAddToCart = (product) => {
    console.log(product);
  };
  </script>
  
  <style scoped>

  .products {
    display:flex;
    width:50%;
    margin:auto;
    background-color: antiquewhite;
  }
  </style>
  