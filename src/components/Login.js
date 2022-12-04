import { Link } from "react-router-dom";
function LogIn() {
    return <section className="LogIn__section">
        <div className="LogIn__container">
            <h2>Log In</h2>
            <form id = "LogIn__form" className="form">
                <p>Email</p>
                <input id = "username" type="email" placeholder="email@gmail.com" />
                <p>Password</p>
                <input type="password" placeholder="password@123"/>
                <button className = "submit__btn" type="submit">Log In</button>
            </form>
            <p className="notLogIn">Not Logged In? <Link to = "/signup">Sign Up</Link></p>
        </div>
    </section>
}

export default LogIn;