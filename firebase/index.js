// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlSOtXkzwa3oGCkZaOold2MI9p6gweGCQ',
  authDomain: 'utb-stock-next.firebaseapp.com',
  projectId: 'utb-stock-next',
  storageBucket: 'utb-stock-next.appspot.com',
  messagingSenderId: '592229154482',
  appId: '1:592229154482:web:cfe289907bf786a8ee93ab',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
