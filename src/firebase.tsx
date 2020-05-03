import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4x90wAoLQl6zT7ku0eyL0LtfW-8k043k",
  authDomain: "my-digital-me.firebaseapp.com",
  databaseURL: "https://my-digital-me.firebaseio.com",
  projectId: "my-digital-me",
  storageBucket: "my-digital-me.appspot.com",
  messagingSenderId: "186773389559",
  appId: "1:186773389559:web:249b96591fd13cc1f1d3f2",
  measurementId: "G-HEMW8Z3RKE",
};

const app = Firebase.initializeApp(firebaseConfig);

// Database
export const db = app.database();
// File Cloud Storage
export const storage = app.storage();

export function Login() {}
export function Logout() {}
export function Register() {}
