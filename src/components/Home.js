import { AiOutlineMenu, AiOutlineSend } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./../Context/context"
import AccountsNav from "./AccountsNav";
import SearchContainer from "./SearchContainer";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { ChatContext } from "../Context/ChatContext";
import { ChatArea } from "./ChatArea";
export default function Home() {
    const { currentUser } = useContext(AppContext);
    const {dispatch} = useContext(ChatContext)
    const [accounts, setAccounts] = useState([])
    console.log(accounts)
    useEffect(() => {
        function getUsers() {
            try {
                const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
                    setAccounts(Object.entries(doc.data()))
                });
                return () => {
                    unsub();
                }
            } catch (error) {
                console.log(error)
            }
        }
        currentUser.uid && getUsers();

    }, [currentUser.uid])
    function handleSelect(u){
        dispatch({type:'CHANGE_USER', payload: u})
    }
    return (
        <section className="home__section">
            <div className="accounts__area">
                <AccountsNav />
                <div className="accounts__container">

                    {accounts.map((account) => {
                        return(
                        <div className="account" onClick={()=>handleSelect(account[1].userInfo)}>
                            <div className="accounts__profile">
                                <img src={account[1].userInfo.img} alt="accounts__pic" />
                            </div>
                            <div>
                                <p>{account[1].userInfo.displayName}</p>
                            </div>
                        </div>)
                    })}

                </div>
                <SearchContainer />
            </div>
            <ChatArea/>
        </section>
    )
}