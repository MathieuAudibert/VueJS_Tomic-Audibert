<template>
    <div id="app" class="register-container">
        <h2>S'inscrire ?</h2>
        <form class="register-form" @submit.prevent="register">
            <div class="inputText">
                <input type="text" v-model="email" placeholder="Email" required>
            </div>
            <div class="inputText">
                <input type="password" v-model="password" placeholder="Mot de passe" required>
            </div>
            <button type="submit">S'incrire</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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

        const register = () => {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    console.log("Inscription rÃ©ussie");
                    router.push('/login');
                })
                .catch((error) => {
                    console.error(error.code);
                    errorMessage.value = error.message;
                });
        };

        return { email, password, errorMessage, register };
    }
};
</script>
  
  <style scoped>
  .signup-container {
    /* Styles similaire à login-container */
  }
  
  /* Les autres styles peuvent rester les mêmes que dans LoginComponent.vue */
  </style>
  