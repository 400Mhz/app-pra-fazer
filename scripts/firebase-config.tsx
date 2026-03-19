import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBodG57c9UfGoPeQ6FHzlH2yDXnhEX_iAI",
  authDomain: "projetos-2026-1---ant.firebaseapp.com",
  projectId: "projetos-2026-1---ant",
  storageBucket: "projetos-2026-1---ant.firebasestorage.app",
  messagingSenderId: "340862179126",
  appId: "1:340862179126:web:3efe52d6f7c8b48cda0597"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth }