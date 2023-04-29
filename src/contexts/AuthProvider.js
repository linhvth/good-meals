import { createContext, useState, useContext, useEffect } from "react";
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         getAuth,
        } from "firebase/auth";


const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
    const [ currUser, setAuth ] = useState({});
    const [ error, setError ] = useState('');

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => { // get the currently signed-in user
            if (user) {
                setAuth(user);
                console.log(user.uid);
            } else console.log("No user found.");
        });
    }, []);
    
    const signup = (email, pwd) => {
        setError('');
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
        error,
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