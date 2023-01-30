import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzfFVeWF7zqysrLO6EJHJZA7ZGfFeR_WQ",
  authDomain: "bintan-travel.firebaseapp.com",
  projectId: "bintan-travel",
  storageBucket: "bintan-travel.appspot.com",
  messagingSenderId: "360014404430",
  appId: "1:360014404430:web:bdbe8c668a01c8968f5c1f",
  measurementId: "G-3FKRQ0CBDF"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};