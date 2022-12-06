import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../Context/ChatContext";
import { db } from "./firebase";

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
                            <div className="message">
                                <div className="message__account">
                                    <img src="/assets/account-1.jpg" alt="account-1" />
                                </div>
                                <p className="chat">hello!
                                </p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}