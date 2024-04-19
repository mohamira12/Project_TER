import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCRaozNS0CVLlgrvGoeEvmzXkLsMAAlKfc",
    authDomain: "chat-app-fd73e.firebaseapp.com",
    projectId: "chat-app-fd73e",
    storageBucket: "chat-app-fd73e.appspot.com",
    messagingSenderId: "511342009961",
    appId: "1:511342009961:web:203f64901f52d6ea264cf8",
    measurementId: "G-WLGDFFYZY1"
  };
  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firebaseAuth=getAuth(app);
  const firestoreDB=getFirestore(app);
  export { app, firebaseAuth, firestoreDB };

