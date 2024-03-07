<template>
  <div class="product-card">
    <img :src="product.imageUrl" alt="Product image" class="product-image">
    <div class="product-info">
      <h3> {{ product.name }} </h3>
      <p> {{ product.price | currency }} </p>
      <button @click="addToCart(product)">Ajouter au panier</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object
});

console.log(props.product); 
</script>


<style scoped>

img{
  width: 50%;
}
.product-card {
  width:50%;
}
</style>
