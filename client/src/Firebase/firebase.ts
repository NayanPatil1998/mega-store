import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZ3GqPQWmMpSvx0Ac7uJdGMajekJ604Dk",
  authDomain: "mega-shop-8333e.firebaseapp.com",
  projectId: "mega-shop-8333e",
  storageBucket: "mega-shop-8333e.appspot.com",
  messagingSenderId: "203231710775",
  appId: "1:203231710775:web:49ddc72855ae9db961f9b2",
  measurementId: "G-GEPVNMFDSF",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseapp.auth();
