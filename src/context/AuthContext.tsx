import React, { useEffect, createContext } from "react";
import { auth } from "../services/firebase";
import { User } from "firebase/auth";
import Cokkies from "js-cookie";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import router from "next/router";

export interface IAuthContext {
  user: User;
}

interface SignProps {
  email: string;
  password: string;
}

const AuthContext = createContext<any>(null);
const AuthProvider = ({ children }: any) => {
  const currentUser = auth.currentUser;
  const [signInWithEmailAndPassword, loading, error]: any =
    useSignInWithEmailAndPassword(auth);

  const logout = () => {
    auth.signOut();
    Cokkies.set("authenticated", "");
    router.replace("/login");
  };

  const signIn = ({ email, password }: SignProps) => {
    signInWithEmailAndPassword(email, password);
    router.replace("/home");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        currentUser?.getIdToken(true).then((token) => {
          Cokkies.set("authenticated", token, { expires: 1 });
          router.replace("/home");
        });
      } else {
        Cokkies.set("authenticated", "");
        router.replace("/login");
      }
    });
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, logout, signIn, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
