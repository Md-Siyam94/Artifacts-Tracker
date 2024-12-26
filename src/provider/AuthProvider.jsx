import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase_init";
import axios from "axios";


export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();





    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (userData) => {
        // console.log(displayName)
        return updateProfile(auth.currentUser, userData)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('cctv lagaisi', currentUser);

            if(currentUser?.email){
                const user = {email: currentUser?.email}
                setUser(currentUser);
                axios.post("https://historical-artifacts-server-nine.vercel.app/jwt", user , {withCredentials: true})
                .then((res)=>{
                    setLoading(false);
                    console.log(res.data);
                })
            }
            else{
                
                axios.post("https://historical-artifacts-server-nine.vercel.app/logoutjwt", {}, {withCredentials: true})
                    .then((res)=>{
                        setLoading(false);
                        console.log('log out', res.data);
                    })
            }


           
        })

        return () => unSubscribe()
    }, [])
    const authInfo = {
        user,
        loading,
        signUpUser,
        updateUserProfile,
        loginUser,
        loginWithGoogle,
        logOutUser,


    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;