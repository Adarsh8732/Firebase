// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTgyF7I7aCydyw_KmoYzjoj2gzr_r-A6E",
  authDomain: "fir-demo-9f325.firebaseapp.com",
  projectId: "fir-demo-9f325",
  storageBucket: "fir-demo-9f325.appspot.com",
  messagingSenderId: "261203634051",
  appId: "1:261203634051:web:12d614d7fbf8e676a2f8b6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const storage = firebase.storage();
export const database = {
    users:firestore.collection('users')
}