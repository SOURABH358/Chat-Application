import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react"
import { ChatContext } from "../Context/ChatContext";
import { db } from "./firebase";
import { v4 as uuid } from "uuid";
import { AppContext } from "../Context/context";
export default function ChatSection() {
    const [messages, setMessages] = useState([]);
    const { state } = useContext(ChatContext)
    const {currentUser} = useContext(AppContext)
    const ref = useRef();
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", state.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
            ref.current.scrollTop = ref.scrollHeight;
            // ref.scrollTop=0;
        });
        return () => {
            unsub();
        }

    }, [state.chatId])
    return (
        <div className="chat__section" ref={ref}>
            <div  className="chat__container">
                {
                    messages.map(m => {
                        return (
                            <div className={`message ${currentUser.uid===m.senderId?"user":""}`} key={uuid()}>
                                <div className="message__account">
                                    <img src="/assets/account-1.jpg" alt="account-1" />
                                </div>
                                {m.text?<p className="chat">{m.text}
                                </p>:""}
                                {m.img?<div className="chat chat__image">
                                    <img src={m.img} alt="chat"/>
                                </div>:''}
                            </div>
                        )
                    })
                }
                
            </div>
            {/* <div ref={ref} className="hidden">

            </div> */}
        </div>
    )
}