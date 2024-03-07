<template>
  <div id="app" class="login-container">
    <h2>Se connecter</h2>
    <form class="login-form" @submit.prevent="login"> <!-- @submit.prevent = v-on = actif lorsque evenemnt js (clic) -->
      <div class="form-group">
        <input type="text" v-model="email" placeholder="Email" required> <!-- v-model = implementer liaison a 2ble sens -->
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Mot de passe" required>
      </div>
      <button type="submit" class="login-button">Se connecter</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p> <!-- v-if = condition d'un bloc -->
    <router-link to="/inscription" class="signup-text">Pas encore de compte ? Inscrivez-vous ici</router-link> <!-- balise routerlink = router push = utiliser une url diff -->
  </div>
</template>

<script>
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
      return {
          email: '',
          password: '',
          errorMessage: ''
      };
  },
  methods: {
      async login() {
          try {
              const userCreation = await signInWithEmailAndPassword(auth, this.email, this.password); //await = attendre resolution promesse
              console.log("Utilisateur connecté avec succès:", userCreation.user);
              this.$router.push('/'); // change url
          } catch (error) {
              console.error("Erreur lors de la connexion:", error);
              this.errorMessage = error.message;
          }
      }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f9f9f9;
}

.login-form {
  width: 100%;
  max-width: 320px;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.form-group {
  width: 100%;
  margin-bottom: 1rem;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #2980b9;
}

.signup-text {
  margin-top: 2rem;
  color: #3498db;
  cursor: pointer;
}

.signup-text:hover {
  text-decoration: underline;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>
