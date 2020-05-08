import Firebase from "firebase";
import { FIREBASE_CONFIG } from "./constants";

// Initialize Firebase
const app = Firebase.initializeApp(FIREBASE_CONFIG);

// Database
export const database = app.database();
// File Cloud Storage
export const storage = app.storage();

export function Login() {}
export function Logout() {}
export function Register() {}
