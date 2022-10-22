import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //user login with google 
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    //create user account
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //login user account
    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    //update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //user logout
    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }
    //useEffect for user
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            console.log('user insides state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        } );
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        providerLogin, 
        userLogout, 
        createUser, 
        signInUser, 
        loading, 
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
