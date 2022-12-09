import {createContext, useEffect, useState} from "react"
import { auth } from "./../components/firebase"
import { onAuthStateChanged } from "firebase/auth";
export const AppContext = createContext();
export default function ContextProvider({children}){
    const [currentUser, setCurrentUser] = useState({});
    console.log(currentUser)
    useEffect(()=>{
       const unsub =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(auth.currentUser)
        })
        return ()=>{
            unsub();
        }
    },[]);

    return(
        <AppContext.Provider 
        value = {{currentUser}}>
            {children}
        </AppContext.Provider>

    )
}