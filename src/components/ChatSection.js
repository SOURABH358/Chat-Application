import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../Context/ChatContext";
import { db } from "./firebase";
import { v4 as uuid } from "uuid";
export default function ChatSection() {
    const [messages, setMessages] = useState([]);
    const { state } = useContext(ChatContext)
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", state.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        });
        return () => {
            unsub();
        }

    }, [state.chatId])
    return (
        <div className="chat__section">
            <div className="chat__container">
                {
                    messages.map(m => {
                        return (
                            <div className="message" key={uuid()}>
                                <div className="message__account">
                                    <img src="/assets/account-1.jpg" alt="account-1" />
                                </div>
                                <p className="chat">{m.text}
                                </p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}