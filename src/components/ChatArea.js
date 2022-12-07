import { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineSend, AiOutlineLink } from "react-icons/ai";

import { ChatContext } from "../Context/ChatContext";
import { AppContext } from "../Context/context";
import ChatSection from "./ChatSection";

export function ChatArea() {
    const [text, setText] = useState('');
    const [img, setImg] = useState('');
    const { state } = useContext(ChatContext);
    const {currentUser} = useContext(AppContext)
    function handleSubmit(){

    }
    return (
        <div className="chat__area">
            <nav className="navbar">
                <div className="account__profile">
                    <img src={state.user.img ? state.user.img : "/assets/default.jpg"} alt="account-pic" />
                    <p>{state.user.displayName ? state.user.displayName : "UserName"}</p>
                </div>
                <AiOutlineMenu className="icons" />
            </nav>
            <ChatSection />
            <div className="message__area">
                <form className="message__form">
                    <input type="text" placeholder="Type..." 
                    value={text}
                    onChange={(e)=>setText(e.target.value)}/>
                    <div className="message__icons">

                        <label htmlFor="change__pic"><AiOutlineLink className="icons"/>
                        <input id="change__pic" type="file" name="change__pic" accept="image/*" 
                        value={img}
                        onChange={(e)=>setImg(e.target.files[0])}/></label>
                        <button type="submit"><AiOutlineSend className="icons" onClick={handleSubmit}/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}