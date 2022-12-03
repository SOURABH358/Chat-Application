import React from "react";

function LogIn() {
    return <section className="LogIn__section">
        <div className="LogIn__container">
            <h2>Log In</h2>
            <form id = "LogIn__form" className="LogIn__form">
                <p>Username</p>
                <input id = "username" type="text" placeholder="Username" />
                <p>Password</p>
                <input type="password" />
                <button className = "LogIn__btn" type="submit">Log In</button>
            </form>
            <p>Not Logged In? <a href="#">Sign Up</a></p>
        </div>
    </section>
}

export default LogIn;