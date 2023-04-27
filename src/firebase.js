import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHFci-ZPyGS4b_lkEqJFLSXokNgvdIRjQ",
  authDomain: "svelte-routing-ab9f0.firebaseapp.com",
  projectId: "svelte-routing-ab9f0",
  storageBucket: "svelte-routing-ab9f0.appspot.com",
  messagingSenderId: "747260825149",
  appId: "1:747260825149:web:09cb205e4d703ee26e6454",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()

const providers = {
    google: new GoogleAuthProvider()
}
const getCurrentUser = async () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, user => {
            resolve(user)
        }, reject)
    })
}

export { auth, providers, getCurrentUser, signInWithPopup };
