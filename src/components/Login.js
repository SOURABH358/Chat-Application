import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {signInWithEmailAndPassword } from "firebase/auth";

function LogIn() {
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try{

        const email = e.target[0].value;
        const password = e.target[1].value;
        // const confirmPassword = e.target[2].value;
        if(!email||!password){
            throw('email and password not provided');
        }
        // if (password!==confirmPassword){
        //     alert('password and confirm password do not match');
        // }
                const res = await signInWithEmailAndPassword(auth, email, password);
                console.log(res.user)
                navigate("/")

        }
        catch(err){
            console.log(err)
        }
    }
    return <section className="LogIn__section">
        <div className="LogIn__container">
            <h2>Log In</h2>
            <form id = "LogIn__form" className="form" onSubmit={(e)=>handleSubmit(e)}>
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