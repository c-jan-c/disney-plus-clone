import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8tM7AvsZLjz6ppe7_JMh790UBQmR6vwA",
  authDomain: "disneyplus-clone-c4590.firebaseapp.com",
  projectId: "disneyplus-clone-c4590",
  storageBucket: "disneyplus-clone-c4590.appspot.com",
  messagingSenderId: "1082524830601",
  appId: "1:1082524830601:web:7bedbce9b5aeda869cef58",
  measurementId: "G-8GHGD8H1FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const analytics = getAnalytics(app);

const authWithPopup = () => {
    return signInWithPopup(auth, provider);
}


export {auth, provider, storage, authWithPopup};
export default db;