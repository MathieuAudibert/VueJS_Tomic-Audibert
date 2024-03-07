import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZBosiza6X3lHZGKF4hbt7URv6fEJpnT8",
  authDomain: "projet-vuejs-82bbf.firebaseapp.com",
  projectId: "projet-vuejs-82bbf",
  storageBucket: "projet-vuejs-82bbf.appspot.com",
  messagingSenderId: "265508353791",
  appId: "1:265508353791:web:d382bf4a1b7fb98e3ebeca"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut, onAuthStateChanged };
