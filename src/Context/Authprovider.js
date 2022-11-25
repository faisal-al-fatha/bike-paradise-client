import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
const logOut = ()=>{
    return signOut(auth);
}

useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
    });
    return () => unsubscribe()
},[])
  const authInfo = {
    signUpUser,
    logIn,
    user,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
