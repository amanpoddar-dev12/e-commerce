import React, { useContext } from 'react';
import { FireBaseContext } from './FirebaseContext';
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth/web-extension';
export const useFirebase = () => useContext(FireBaseContext);
const firebaseapp = initializeApp(firebaseConfig);  
const firebaseConfig = {
    apiKey: "AIzaSyDS2QT4j9ViwbGPZC31d0ukM4VCZaxA0bg",
    authDomain: "e-commerce-307ca.firebaseapp.com",
    projectId: "e-commerce-307ca",
    storageBucket: "e-commerce-307ca.appspot.com",
    messagingSenderId: "832057517126",
    appId: "1:832057517126:web:b04357245a49b3bdc2d647"
};
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
function FireBaseProvider() {

  return (
    <FireBaseContext.Provider value={}></FireBaseContext.Provider>
  )
}

export default FireBaseProvider;