<template>
  <div id="app" class="login-container">
      <h2>Se connecter ?</h2>
      <form class="login-form" @submit.prevent="login">
          <div class="inputText">
              <input type="text" v-model="email" placeholder="Email" required>
          </div>
          <div class="inputText">
              <input type="password" v-model="password" placeholder="Mot de passe" required>
          </div>
          <button type="submit">Se connecter</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
              const userCreation = await signInWithEmailAndPassword(auth, this.email, this.password);
              console.log("Utilisateur connecté avec succès:", userCreation.user);
              this.$router.push('/');
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
  max-width: 300px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #5cb85c;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}

.login-button:hover {
  background-color: #4cae4c;
}

.signup-text {
  margin-top: 1rem;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>