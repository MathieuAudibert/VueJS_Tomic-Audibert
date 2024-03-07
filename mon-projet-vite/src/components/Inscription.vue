<template>
    <div class="register-container">
      <h2>S'inscrire</h2>
      <form class="register-form" @submit.prevent="register"> <!-- @submit.prevent = v-on = actif lorsque evenemnt js (clic) -->
        <div class="form-group">
          <input type="text" v-model="email" placeholder="Email" required> <!-- v-model = implementer liaison a 2ble sens -->
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Mot de passe" required>
        </div>
        <button type="submit" class="register-button">S'inscrire</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p> <!-- v-if = condition d'un bloc -->
      <router-link to="/connexion" class="login-text">Vous avez déjà un compte ? Connectez-vous</router-link> <!-- balise routerlink = router push = utiliser une url diff -->
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { auth } from '../firebase'; 
  import { useRouter } from "vue-router";
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  
  export default {
      setup() {
          const email = ref("");
          const password = ref("");
          const errorMessage = ref("");
          const router = useRouter();
  
          const register = async () => {
              try {
                  await createUserWithEmailAndPassword(auth, email.value, password.value);
                  console.log("Inscription réussie");
                  router.push('/connexion');
              } catch (error) {
                  console.error("Erreur d'inscription:", error);
                  errorMessage.value = error.message;
              }
          };
  
          return { email, password, errorMessage, register };
      }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f9f9f9;
  }
  
  .register-form {
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
  
  .register-button {
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
  
  .register-button:hover {
    background-color: #2980b9;
  }
  
  .login-text {
    margin-top: 1rem;
    color: #3498db;
    cursor: pointer;
  }
  
  .login-text:hover {
    text-decoration: underline;
  }
  
  .error-message {
    color: red;
    margin-top: 1rem;
  }
  </style>
  