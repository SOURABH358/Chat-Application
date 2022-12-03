import { Link } from "react-router-dom";
export default function SignUp(){
    return (
        <section className="SignUp__section">
        <div className="SignUp__container">
            <h2>Sign up</h2>
            <form id = "SignUp__form" className="form">
                <p>Username</p>
                <input id = "username" type="text" placeholder="username_123" />
                <p>Password</p>
                <input type="password" placeholder="password@123"/>
                <p>Confirm Password</p>
                <input type="password" placeholder="password@123"/>
                <button className = "LogIn__btn" type="submit">Log In</button>
            </form>
            <p className="notLogIn">Already Signed In? <Link to = "/login">Log In</Link></p>
        </div>
    </section>
    )
}