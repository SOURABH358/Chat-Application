import UserMenu from "./UserMenu";
import { useContext, useState } from "react";
import { AppContext } from "./../Context/context"
import { AiOutlineMenu } from "react-icons/ai";
export default function AccountsNav() {
    const { currentUser } = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false);
    console.log(currentUser)
    return (
        <div className="accounts__nav">
            {showMenu ? <UserMenu /> : null}
            <div className="user__profile">
                <img src={currentUser.photoURL ? currentUser.photoURL : "/assets/default.jpg"} alt="user-pic" />
                <div>{currentUser.displayName}</div>
            </div>
            <AiOutlineMenu className="icons" onClick={() => setShowMenu(!showMenu)} />
        </div>
    )
}