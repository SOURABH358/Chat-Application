import { useContext } from "react";
import { AiOutlineMenu, AiOutlineSend } from "react-icons/ai";
import { ChatContext } from "../Context/ChatContext";
import ChatSection from "./ChatSection";

export function ChatArea(){
    const {state} = useContext(ChatContext);

    return (
        <div className="chat__area">
                <nav className="navbar">
                    <div className="account__profile">
                        <img src={state.user.img?state.user.img:"/assets/default.jpg"} alt="account-pic" />
                        <p>{state.user.displayName?state.user.displayName:"UserName"}</p>
                    </div>
                    <AiOutlineMenu className="icons" />
                </nav>
                <ChatSection/>
                <div className="message__area">
                    <form className="message__form">
                        <input type="text" placeholder="Type..." />
                        <AiOutlineSend className="icons" />
                    </form>
                </div>
            </div>
    )
}