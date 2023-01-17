import { useState } from "react";
import { collection, query, where, getDocs, getDoc, setDoc, updateDoc, serverTimestamp, doc } from "firebase/firestore";
import { db } from "./firebase";
import { useContext } from "react";
import { AppContext } from "./../Context/context"
export default function SearchContainer() {
    const [username, SetUsername] = useState('');
    const [user, SetUser] = useState(null)
    const { currentUser } = useContext(AppContext);

    async function handleSearch() {
        try {

            const q = query(collection(db, "users"), where("displayName", "==", username));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                SetUser(doc.data())
            });

        } catch (error) {
            console.log(error)
        }
    }
    function handleKey(e) {
        e.code === 'Enter' && handleSearch();
        e.code === 'Backspace' && SetUser(null)
    }
    async function handleSelect() {
        const combinedId = currentUser.uid > user.uid 
        ? currentUser.uid + user.uid 
        : user.uid + currentUser.uid;
        try{
            const res = await getDoc(doc(db, "chats", combinedId));
            if(!res.exists()){
                await setDoc(doc(db, "chats", combinedId),{ messages: [] })
            }
            await updateDoc(doc(db, "userChat", currentUser.uid),{
                [combinedId+".userInfo"]:{
                    img: user.photoURL?user.photoURL:"/assets/default.jpg",
                    displayName: user.displayName,
                    uid: user.uid,
                    date: serverTimestamp()
                }
            })
            await updateDoc(doc(db, "userChat", user.uid),{
                [combinedId+".userInfo"]:{
                    img: currentUser.photoURL?currentUser.photoURL:"/assets/default.jpg",
                    displayName: currentUser.displayName,
                    uid: currentUser.uid,
                    date: serverTimestamp()
                }
            })
            SetUser(null);
            SetUsername("");

        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className="search__container">
            <input type="text" placeholder="Search..." value={username} onChange={(e) => SetUsername(e.target.value)} onKeyDown={(e) => handleKey(e)} />
            {user && <div className="search__result" onClick={handleSelect}>
                <div className="search__avatar">
                    <img src={user.photoURL?user.photoURL:'/assets/default.jpg'} alt="user pic" />
                </div>
                <div>{user.displayName}</div>
            </div>}
        </div>
    )
}