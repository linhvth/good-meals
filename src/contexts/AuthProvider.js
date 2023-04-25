import { createContext, useState, useContext, useEffect } from "react";
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [ currUser, setAuth ] = useState({});

    function signup(email, pwd) {
        return createUserWithEmailAndPassword(auth, email, pwd);
    }

    function login(email, pwd) {
        return signInWithEmailAndPassword(auth, email, pwd);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged( user => {
            setAuth(user);
        })

        return unsubcribe;
    }, []);
    
    const value = {
        currUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;