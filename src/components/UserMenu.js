import { auth } from "./firebase"
import { signOut } from "firebase/auth"
export default function UserMenu(){
   async function handleLogOut(){
        const res = await signOut(auth)
    }
    return (
        <div className="user__menu">
            <p>Update Profile</p>
            <p onClick={()=>handleLogOut()}>Log Out</p>
            <p>Delete User</p>
        </div>
    )
}