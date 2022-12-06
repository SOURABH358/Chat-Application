import { useContext } from "react";
import { AiOutlineMenu, AiOutlineSend } from "react-icons/ai";
import { ChatContext } from "../Context/ChatContext";

export function ChatArea(){
    const {state} = useContext(ChatContext);
    return (
        <div className="chat__area">
                <nav className="navbar">
                    <div className="account__profile">
                        <img src={state.img} alt="account-pic" />
                        <p>{state.displayName}</p>
                    </div>
                    <AiOutlineMenu className="icons" />
                </nav>
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
                <div className="message__area">
                    <form className="message__form">
                        <input type="text" placeholder="Type..." />
                        <AiOutlineSend className="icons" />
                    </form>
                </div>
            </div>
    )
}