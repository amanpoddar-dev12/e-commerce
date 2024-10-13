import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";
import { UserDetail } from "./UserDetailsContext";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDS2QT4j9ViwbGPZC31d0ukM4VCZaxA0bg",
  authDomain: "e-commerce-307ca.firebaseapp.com",
  projectId: "e-commerce-307ca",
  storageBucket: "e-commerce-307ca.appspot.com",
  messagingSenderId: "832057517126",
  appId: "1:832057517126:web:b04357245a49b3bdc2d647",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const FireBaseContext = createContext();

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

function FireBaseProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      console.log(user.photoURL);
      if (user) setUser(user);
      else setUser(null);
    });
  });
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpwithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const signUpwithGithub = () => {
    return signInWithPopup(auth, GithubProvider);
  };

  const logout = () => {
    return signOut(auth);
  };
  //   const navigate = useNavigate();
  //   const logout = () => {
  //     signOut(auth).then((res) => navigate("/"));
  //   };
  const isLoggedIn = user !== null;
  const cleanURL = (urlString) => {
    // Use regex to remove unwanted characters like [ " ] and spaces
    return urlString.replace(/[\[\]" ]/g, "");
  };
  return (
    <FireBaseContext.Provider
      value={{
        user,
        signUpUserWithEmailAndPassword,
        signUpwithGoogle,
        signUpwithGithub,
        isLoggedIn,
        logout,
        cleanURL,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
}

export default FireBaseProvider;
