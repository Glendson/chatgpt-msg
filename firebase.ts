import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7FKRGFy_o17PKLzDVMpy0h15c20Edsc8",
  authDomain: "chatgpt-msg-23c33.firebaseapp.com",
  projectId: "chatgpt-msg-23c33",
  storageBucket: "chatgpt-msg-23c33.appspot.com",
  messagingSenderId: "78188341878",
  appId: "1:78188341878:web:76314aa17f32edaefa8d57"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }