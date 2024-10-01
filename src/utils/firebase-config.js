// src/utils/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9PhMGarEyxH7z-A6smwEyCzZMzxlb-B4",
  authDomain: "mapa-interactivo-f1b27.firebaseapp.com",
  projectId: "mapa-interactivo-f1b27",
  storageBucket: "mapa-interactivo-f1b27.appspot.com",
  messagingSenderId: "514963880987",
  appId: "1:514963880987:web:39e58e06dbd4df1e024cbe",
  measurementId: "G-M933RJPQ6F"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };
