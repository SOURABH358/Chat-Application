import { AiOutlineMenu, AiOutlineSend } from "react-icons/ai";
import { useContext } from "react";
import {AppContext} from "./../Context/context"
import AccountsNav from "./AccountsNav";
export default function Home() {
    const {currentUser} = useContext(AppContext);
    return (
        <section className="home__section">
            <div className="accounts__area">
                <AccountsNav/>
                <div className="accounts__container">
                    <div className="">

                    </div>
                    <div className="account">
                        <div className="accounts__profile">
                            <img src="/assets/account-1.jpg" alt="accounts__pic" />
                        </div>
                        <div>
                            <p>Sourabh Yadav</p>
                        </div>
                    </div>
                    <div className="account">
                        <div className="accounts__profile">
                            <img src="/assets/account-1.jpg" alt="accounts__pic" />
                        </div>
                        <div>
                            <p>Sourabh Yadav</p>
                        </div>
                    </div>
                    <div className="account">
                        <div className="accounts__profile">
                            <img src="/assets/account-1.jpg" alt="accounts__pic" />
                        </div>
                        <div>
                            <p>Sourabh Yadav</p>
                        </div>
                    </div>
                    <div className="account">
                        <div className="accounts__profile">
                            <img src="/assets/account-1.jpg" alt="accounts__pic" />
                        </div>
                        <div>
                            <p>Sourabh Yadav</p>
                        </div>
                    </div>
                    <div className="account">
                        <div className="accounts__profile">
                            <img src="/assets/account-1.jpg" alt="accounts__pic" />
                        </div>
                        <div>
                            <p>Sourabh Yadav</p>
                        </div>
                    </div>
                    <div className="account">
                        <div className="accounts__profile">
                            <img src="/assets/account-1.jpg" alt="accounts__pic" />
                        </div>
                        <div>
                            <p>Sourabh Yadav</p>
                        </div>
                    </div>
                    <div className="account">
                        <div className="accounts__profile">
                            <img src="/assets/account-1.jpg" alt="accounts__pic" />
                        </div>
                        <div>
                            <p>Sourabh Yadav</p>
                        </div>
                    </div>
                    <div className="account">
                        <div className="accounts__profile">
                            <img src="/assets/account-1.jpg" alt="accounts__pic" />
                        </div>
                        <div>
                            <p>Sourabh Yadav</p>
                        </div>
                    </div>


                </div>
                <div className="search__container">
                    <input type="text" placeholder="Type..." />
                </div>
            </div>
            <div className="chat__area">
                <nav className="navbar">
                    <div className="account__profile">
                        <img src="/assets/account-1.jpg" alt="account-pic" />
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
                    <div className="message__form">
                        <input type="text" placeholder="Type..." />
                        <AiOutlineSend className="icons" />
                    </div>
                </div>
            </div>
        </section>
    )
}