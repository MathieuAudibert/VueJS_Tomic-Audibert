<template>
    <section class="products">
      <div v-for="product in products" :key="product.id"> 
      <!-- v-for = rendu des elements d'un tableau -->
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
    { id: 3, name: 'Café paka', price: 13.00, imageUrl: 'https://lacaravelleverte.com/wp-content/uploads/2020/08/cafe-arabica-120g-cafecacao-caravelleweb.jpg' },
  
]);


  
const cart = ref([]);

const handleAddToCart = (product) => {
  const cartItem = cart.value.find((item) => item.id === product.id);
}
  </script>
  
  <style scoped>
  .products {
    width:50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px; 
  }
  
  .product-wrapper {
    flex-basis: calc(33.3% - 20px);
    max-width: calc(33.3% - 20px);
  }
  
  @media (max-width: 768px) {
    .product-wrapper {
      flex-basis: calc(50% - 20px);
      max-width: calc(50% - 20px);
    }
  }
  
  @media (max-width: 480px) {
    .product-wrapper {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
  </style>