import { auth, db } from "./firebase"
import { signOut, updateProfile } from "firebase/auth"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { useContext } from "react";
import { AppContext } from "./../Context/context"
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function UserMenu(){
    const {currentUser} = useContext(AppContext)
    const navigate = useNavigate();
    const storageRef = ref(storage, 'user.jpg');
    function handleProfileChange(e){
        e.preventDefault();
        const file = e.target[0].files[0];
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                    const docRef = doc(db, "users", currentUser.uid);
                    const res = await updateDoc(docRef, {
                         photoURL: downloadURL
                         });
                    await updateProfile(currentUser, {
                        photoURL: downloadURL
                    })
                         console.log(res)
                });
            }
        );
        // window.location.reload();
        
    }
   async function handleLogOut(){
        const res = await signOut(auth)
    }
    return (
        <div className="user__menu">
            <form onSubmit={(e)=>handleProfileChange(e)}>
            <input id = "change__pic" type="file" name = "change__pic" accept="image/*"/>
            <label htmlFor ="change__pic">Change Pic</label>
            <button type = "submit" >Update</button>
            </form>
            <p onClick={()=>handleLogOut()}>Log Out</p>
            <p>Delete User</p>
        </div>
    )
}