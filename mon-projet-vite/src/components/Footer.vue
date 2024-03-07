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
    
    padding: 20px;
    background-color: #cecece;
    text-align: center;
    bottom: 0;
    width: 100%;
    margin-top:10%;
  }
  .container {
    max-width: 1200px;
    margin: auto;
  }
  </style>
  