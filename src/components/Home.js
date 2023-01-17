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
    useEffect(() => {
        function getUsers() {
                const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
                    setAccounts(Object.entries(doc.data()))
                });
                return () => {
                    unsub();
                }
            
        }
        currentUser.uid && getUsers();

    }, [currentUser.uid])
    function handleSelect(u){
        document.getElementById('accounts__area').classList.remove('show')
        dispatch({type:'CHANGE_USER', payload: u})
    }
    
    return (
        <section className="home__section">
            <div id = "accounts__area" className="accounts__area">
                <AccountsNav />
                <div className="accounts__container">

                    {accounts.sort((a,b)=>b[1].userInfo.messageDate-a[1].userInfo.messageDate).map((account) => {
                        return(
                        <div className="account" key = {account[1].userInfo.uid} onClick={()=>handleSelect(account[1].userInfo)}>
                            <div className="accounts__profile">
                                <img src={account[1].userInfo.img?account[1].userInfo.img:"/assets/default.img"} alt="accounts__pic" />
                            </div>
                            <div>
                                <p>{account[1].userInfo.displayName?account[1].userInfo.displayName:"Unknown"}</p>
                                <p className="last__message">{account[1].userInfo?account[1].userInfo.lastMessage:""}</p>
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