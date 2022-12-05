import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
export default function SearchContainer() {
    const [username, SetUsername] = useState('');
    const [user, SetUser] = useState(null)
    async function handleSearch() {
        try{
            
        const q = query(collection(db, "users"), where("displayName", "==", username));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                SetUser(doc.data())
            });
            
        }catch(error)
        {
            console.log(error)
        }
    }
    function handleKey(e) {
        e.code === 'Enter' && handleSearch();
        e.code === 'Backspace' && SetUser(null)
    }
    return (
        <div className="search__container">
            <input type="text" placeholder="Type..." onChange={(e) => SetUsername(e.target.value)} onKeyDown={(e) => handleKey(e)} />
            {user&&<div className="search__result">
                <div className="search__avatar">
                    <img src={user.photoURL} alt = "user pic"/>
                </div>
                <div>{user.displayName}</div>
            </div>}
        </div>
    )
}