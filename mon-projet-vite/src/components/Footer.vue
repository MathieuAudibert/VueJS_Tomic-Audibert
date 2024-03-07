<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Mon Site de E-commerce. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1200px;
  margin: auto;
}
</style>
