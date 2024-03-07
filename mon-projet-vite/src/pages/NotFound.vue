<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Page non trouvée.</p>
      <router-link to="/">Retourner à l'accueil</router-link> <!-- balise routerlink = router push = utiliser une url diff -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 100px;
  }
  
  .not-found h1 {
    font-size: 6em;
  }
  
  .not-found p {
    font-size: 2em;
  }
  
  .not-found a {
    font-size: 1em;
    color: #3498db;
    text-decoration: none;
  }
  </style>
  