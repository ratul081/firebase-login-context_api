import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading,setLoading]= useState(true)
  //why doing this so that user change in everywhere it will hold user data
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
      console.log("🚀 ~ file: UserContext.js:16 ~ useEffect ~ currentUser:", currentUser)
    })
    return ()=>{
      unSubscribe();
    }
  }, [])
  const googleProvider = new GoogleAuthProvider; 

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singInWithGoogle=()=>{
    return signInWithPopup(auth, googleProvider)
  }

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut=()=>{
    return signOut(auth)
  }






  const authInfo = { user, createUser, singIn,singInWithGoogle,logOut,loading }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;