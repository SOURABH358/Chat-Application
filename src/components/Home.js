import React from "react";

export default function Home(){
    return (
        <section className="home__section">
            <div className="accounts__area">
                <div className="accounts__nav">
                    <div className="user__profile">
                        <img src="/assets/user.jpg" alt = "user-pic"/>
                    </div>
                </div>
            </div>
            <div className="chat__area">
                <nav className="navbar">
                    <div className="account__profile"></div>
                </nav>
            </div>
        </section>
    )
}