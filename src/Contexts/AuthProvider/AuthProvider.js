import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //user login with google 
    const providerLogin = (provider) => {
        return signInWithPopup(auth,provider);
    }
    //create user account
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login user account
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    //user logout
    const userLogout = () => {
        return signOut(auth);
    }
    //useEffect for user
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            console.log('user insides state change', currentUser);
            setUser(currentUser);
        } );
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user, providerLogin, userLogout, createUser, signInUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
