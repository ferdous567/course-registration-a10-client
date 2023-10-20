import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import PropTypes from 'prop-types';
import { useEffect } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () =>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('current user',currentUser)
            setUser(currentUser);
            setLoading(false)
        })

        return () =>{
            unSubscribe();
        }
    },[])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

   

    const authInfo ={
        user,
        googleSignIn,
        createUser,
        signInWithEmail,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node
}

export default AuthProviders;