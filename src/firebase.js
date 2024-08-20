// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSKA7RIiZnBvHtkCV_vs3de6W406l1-48",
  authDomain: "chatapp-1ea18.firebaseapp.com",
  projectId: "chatapp-1ea18",
  storageBucket: "chatapp-1ea18.appspot.com",
  messagingSenderId: "1079106896981",
  appId: "1:1079106896981:web:a4d6b16bc9f5a25c28c0dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { auth, firestore, storage };
