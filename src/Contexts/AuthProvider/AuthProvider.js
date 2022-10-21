import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //user login with google 
    const providerLogin = (provider) => {
        return signInWithPopup(auth,provider);
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

    const authInfo = {user, providerLogin, userLogout};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
