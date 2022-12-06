import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../Context/ChatContext";

export default function ChatSection(){
    const [messages, setMessages] = useState([]);
    const {state} = useContext(ChatContext)
    useEffect(()=>{
                const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
                    doc.exists && setMessages(doc.data().message)
                });
                return () => {
                    unsub();
                }
            
    },[state.chatId])
    return (
        <div className="chat__section">
                    <div className="chat__container">
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">hello!
                            </p>
                        </div>
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">hello!
                            </p>
                        </div>
                        <div className="message user">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">Hello how are you I hope you are doing fine</p>
                        </div>
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat chat__image">
                                <img src="/assets/pic-1.jfif" alt="pic" />
                            </p>
                        </div>
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">
                                hello
                            </p>
                        </div>
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">
                                hello
                            </p>
                        </div>
                    </div>
                </div>
    )
}