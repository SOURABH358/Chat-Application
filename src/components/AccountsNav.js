import UserMenu from "./UserMenu";
import { useContext, useState } from "react";
import {AppContext} from "./../Context/context"
import { AiOutlineMenu } from "react-icons/ai";
export default function AccountsNav(){
    const {currentUser} = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false)
     return (
        <div className="accounts__nav">
        {showMenu?<UserMenu/>:null}
        <div className="user__profile">
            <img src="/assets/user.jpg" alt="user-pic" />
        </div>
        <p>{currentUser.username}</p>
        <AiOutlineMenu className="icons" onClick={()=>setShowMenu(!showMenu)}/>
    </div>
     )
 }