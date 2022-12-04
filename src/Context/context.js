import {createContext, useEffect, useState} from "react"
import { auth } from "./../components/firebase"
import { onAuthStateChanged } from "firebase/auth";
export const AppContext = createContext();
export default function ContextProvider({children}){
    const [currentUser, setCurrentUser] = useState({});
    useEffect(()=>{
       const unsub =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            // console.log(user)
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