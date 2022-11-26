import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null);
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const providerLogin = (provider)=>{
    setLoading(true);
     return signInWithPopup(auth, provider);
}

 const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }
const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
    });
    return () => unsubscribe()
},[])
  const authInfo = {
    signUpUser,
    logIn,
    providerLogin,
    user,
    updateUser,
    loading,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
