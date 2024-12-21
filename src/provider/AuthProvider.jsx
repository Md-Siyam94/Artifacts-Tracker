import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase_init";


export const AuthContex = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()



    const loginWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
            console.log('cctv lagaisi', currentUser)
        })

        return ()=> unSubscribe()
    },[])
    const authInfo = {
       user,
       loading,
       loginWithGoogle,
       name: 'Siyam'

    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;