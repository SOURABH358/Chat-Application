import { Action } from "@remix-run/router";
import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";
import { db } from "../components/firebase";
import { AppContext } from "./context";
export const ChatContext = createContext();
export function ChatContextProvider({children}){
    const {currentUser} = useContext(AppContext)
    const INITIAL_STATE = {
        user: {},
        chatId: ''
    }
   
    function reducer(state, action){
        if(action.type==='CHANGE_USER')
        {
            return {
                user: action.payload,
                chatId: currentUser.uid > action.payload.uid 
                ? currentUser.uid + action.payload.uid 
                : action.payload.uid + currentUser.uid
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return <ChatContext.Provider value={{state, dispatch}}>
        {children}
    </ChatContext.Provider>
}

