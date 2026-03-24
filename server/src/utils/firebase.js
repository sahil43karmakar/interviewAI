
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-1714d.firebaseapp.com",
  projectId: "fir-1714d",
  storageBucket: "fir-1714d.firebasestorage.app",
  messagingSenderId: "1068121725484",
  appId: "1:1068121725484:web:8bdd1c510296a8d4f4cf89"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}