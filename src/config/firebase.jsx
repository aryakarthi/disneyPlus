import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "disney-plus-vite.firebaseapp.com",
  projectId: "disney-plus-vite",
  storageBucket: "disney-plus-vite.appspot.com",
  messagingSenderId: "633570501119",
  appId: "1:633570501119:web:e5fdfc310c86b9e88fc7ca",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };

