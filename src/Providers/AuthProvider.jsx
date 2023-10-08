import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const provider = new GoogleAuthProvider()

 const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
 }

 const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
 }

 const signUpWithGoogle = () =>{
    return signInWithPopup(auth, provider)
 }

//  const updateUser = (user) =>{
//     return updateProfile(user)
//  }

  // useEffect(()=>{
  //     const unsubscribe
  // },[])

  const authInfo = {
    user,
    createUser,
    signInUser,
    signUpWithGoogle


  }

 
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
