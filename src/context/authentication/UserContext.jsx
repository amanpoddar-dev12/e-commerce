import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const FireBaseContext = createContext();

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

function FireBaseProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
    return () => unsubscribe();
  }, []);
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUpwithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const signUpwithGithub = () => {
    return signInWithPopup(auth, GithubProvider);
  };

  const logout = () => {
    return signOut(auth).then(() => {
      setUser(null);
    });
  };

  const isLoggedIn = user !== null;
  const cleanURL = (urlString) => {
    return urlString.replace(/[\[\]" ]/g, "");
  };
  return (
    <FireBaseContext.Provider
      value={{
        user,
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
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
