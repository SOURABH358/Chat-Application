import { createContext, useContext } from "react";
import { useReducer } from "react";
import { AppContext } from "./context";
export const ChatContext = createContext();
export function ChatContextProvider({children}){
    const {currentUser} = useContext(AppContext)
    const INITIAL_STATE = {
        user: {},
        chatId: 'null'
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
        return state;
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return <ChatContext.Provider value={{state, dispatch}}>
        {children}
    </ChatContext.Provider>
}

