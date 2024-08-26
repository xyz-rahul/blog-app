import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { getAuth, signOut as firebaseSignOut } from "firebase/auth";

const AuthenticationContext = createContext({ user: null });

const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState({ use: null });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  function signOut() {
    firebaseSignOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <AuthenticationContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationContextProvider };
