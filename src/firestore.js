import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBVZQX5tsryFAz6BPSCLisW_iAt_1L5Em4",
    authDomain: "ecommerce-project-4bad5.firebaseapp.com",
    projectId: "ecommerce-project-4bad5",
    storageBucket: "ecommerce-project-4bad5.appspot.com",
    messagingSenderId: "1056687979958",
    appId: "1:1056687979958:web:1eaa4e36e21126f6ddd517"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


