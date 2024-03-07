<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../img/logoTT.png" alt="Home" class="logo"/> <!-- Remplacez par le chemin de votre logo -->
        <span class="site-name">E-cofee</span>
      </router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link to="/panier" class="navbar-item">
          <span class="icon">
            <i class="fas fa-shopping-cart"></i> <!-- Utilisez FontAwesome ou une autre bibliothèque d'icônes -->
          </span>
          <span>Panier</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
.navbar {
  background-color: #c9c9c9;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.navbar-brand {
  align-items: center;
  display: flex;
}

.navbar-item {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.navbar-item:hover {
  background-color: #555;
}

.logo {
  width:50%;
  max-height: 3rem; 
  margin-right: 0.5rem;
}

.site-name {
  margin-left:5rem;
  font-weight: bold;
  font-size: 1.5rem;
}

.icon {
  margin-right: 0.5rem;
}
</style>
