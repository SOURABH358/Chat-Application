import UserMenu from "./UserMenu";
import { useContext, useState } from "react";
import { AppContext } from "./../Context/context"
import { AiOutlineMenu } from "react-icons/ai";
export default function AccountsNav() {
    const { currentUser } = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false);
    console.log(currentUser.displayName)
    return (
        <div className="accounts__nav">
            {showMenu ? <UserMenu /> : null}
            <div className="user__profile">
                <img src={currentUser.photoURL ? currentUser.photoURL : "/assets/default.jpg"} alt="user-pic" />
                <div>{currentUser.displayName?currentUser.displayName:"You"}</div>
            </div>
            <AiOutlineMenu className={`icons ${showMenu?"rotate":""}`} onClick={() => setShowMenu(!showMenu)} />
        </div>
    )
}