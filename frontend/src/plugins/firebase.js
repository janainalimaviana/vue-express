// src/plugins/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXhpWwQTa5wUYPDzaKZoPHd0mYTNO92TQ",
  authDomain: "fmds-projeto.firebaseapp.com",
  projectId: "fmds-projeto",
  storageBucket: "fmds-projeto.firebasestorage.app",
  messagingSenderId: "442718343822",
  appId: "1:442718343822:web:df519c6ffda8721ce72fdf"
};

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Serviços de autenticação
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// Exportações nomeadas (recomendado)
export { firebaseApp, auth, provider };
