import { defineStore } from 'pinia';
import { auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '../firebase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async loginUser(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } catch (error) {
        throw error;
      }
    },
      async logoutUser() {
        await signOut(auth);
        this.user = null
    },
    initializeAuthState() {
      onAuthStateChanged(auth, (user) => {
        this.user = user;
      });
    },
  },
});
