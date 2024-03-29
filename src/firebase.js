// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import {useEffect, useState} from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXBYVnUm4HaXHDuPpELCBUA7bCV9tQxJA",
  authDomain: "talker-300c5.firebaseapp.com",
  projectId: "talker-300c5",
  storageBucket: "talker-300c5.appspot.com",
  messagingSenderId: "625771506022",
  appId: "1:625771506022:web:999a46663efd2e388900a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function Signup(email, password) {
    let newUser;
    try {
    newUser = createUserWithEmailAndPassword(auth, email, password);
    return newUser;
    } catch(error) {
        switch (error.code) {
            case "auth/email-already-in-use": 
                console.log(`Email ${email} already in use`);
                break;
            case 'auth/invalid-email':
                console.log(`Email address ${email} is invalid.`);
                break;
            case 'auth/operation-not-allowed':
            console.log(`Error during sign up.`);
                break;
            default:
            console.log(error.message);
            break;
        }
    }
    
}

export function Signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function Logout() {
    return signOut(auth);
}

export function useAuth() {
    const [authUser, setAuthUser] = useState();
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, user => setAuthUser(user))
        return subscribe;
    }, [])
    return authUser;

}
