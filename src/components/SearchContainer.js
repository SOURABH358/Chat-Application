import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
export default function SearchContainer() {
    const [username, SetUsername] = useState('');
    const [user, SetUser] = useState(null)
    async function handleSearch() {
        const q = query(collection(db, "users"), where("displayName", "==", username));

        const querySnapshot = await getDocs(q);
        try{
            querySnapshot.forEach((doc) => {
                
            });
        }catch(error)
        {
            console.log(error)
        }
    }
    function handleKey(e) {
        e.code === 'Enter' && handleSearch();
    }
    return (
        <div className="search__container">
            <input type="text" placeholder="Type..." value={username} onChange={(e) => SetUsername(e.value)} onKeyDown={(e) => handleKey(e)} />
            <div className="search__result">
                <div className="search__avatar">
                    <img src={user.photoURL} alt = "user pic"/>
                </div>
                <div>{user.displayName}</div>
            </div>
        </div>
    )
}