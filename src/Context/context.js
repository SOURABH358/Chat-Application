import React,{createContext, useEffect, useState} from "react"
import { onAuthStateChanged } from "firebase/auth";
const AppContext = createContext();
export default function ContextProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    },[]);

    return(
        <AppContext.Provider 
        value = {
            signedInuser
        }>
            {children}
        </AppContext.Provider>

    )
}