import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKYejEsmkKHqHH2bge_ulpEIfoIm0IBsE",
  authDomain: "develop-projects-5bd9c.firebaseapp.com",
  databaseURL: "https://develop-projects-5bd9c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "develop-projects-5bd9c",
  storageBucket: "develop-projects-5bd9c.appspot.com",
  messagingSenderId: "245481626248",
  appId: "1:245481626248:web:82b75822783523d6e39d3d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
