import { AiOutlineMenu, AiOutlineSend } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./../Context/context"
import AccountsNav from "./AccountsNav";
import SearchContainer from "./SearchContainer";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
export default function Home() {
    const { currentUser } = useContext(AppContext);
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
    return (
        <section className="home__section">
            <div className="accounts__area">
                <AccountsNav />
                <div className="accounts__container">

                    {accounts.map((account) => {
                        return(
                        <div className="account">
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
            <div className="chat__area">
                <nav className="navbar">
                    <div className="account__profile">
                        <img src="/assets/account-1.jpg" alt="account-pic" />
                        <p>Jonas</p>
                    </div>
                    <AiOutlineMenu className="icons" />
                </nav>
                <div className="chat__section">
                    <div className="chat__container">
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">hello!
                            </p>
                        </div>
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">hello!
                            </p>
                        </div>
                        <div className="message user">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">Hello how are you I hope you are doing fine</p>
                        </div>
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat chat__image">
                                <img src="/assets/pic-1.jfif" alt="pic" />
                            </p>
                        </div>
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">
                                hello
                            </p>
                        </div>
                        <div className="message">
                            <div className="message__account">
                                <img src="/assets/account-1.jpg" alt="account-1" />
                            </div>
                            <p className="chat">
                                hello
                            </p>
                        </div>
                    </div>
                </div>
                <div className="message__area">
                    <form className="message__form">
                        <input type="text" placeholder="Type..." />
                        <AiOutlineSend className="icons" />
                    </form>
                </div>
            </div>
        </section>
    )
}