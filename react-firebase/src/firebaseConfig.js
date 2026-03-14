import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCYWlV3WdSFHb4FXKHCMFi8O-EugPxJUDw",
  authDomain: "react-firebase-auth-2024-4dec5.firebaseapp.com",
  projectId: "react-firebase-auth-2024-4dec5",
  storageBucket: "react-firebase-auth-2024-4dec5.firebasestorage.app",
  messagingSenderId: "318402728234",
  appId: "1:318402728234:web:5b16fe4f67940c43878e53",
  measurementId: "G-B9EMNYRFXY"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 