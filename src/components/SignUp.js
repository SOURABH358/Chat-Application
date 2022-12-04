import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try{

        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirmPassword = e.target[3].value;
        if(!email||!password){
            throw('email and password not provided');
        }
        if (password!==confirmPassword){
            alert('password and confirm password do not match');
        }
                const res = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName: username,
                    email
                  });
                console.log(res)
                navigate("/")

        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <section className="SignUp__section">
            <div className="SignUp__container">
                <h2>Sign Up</h2>
                <form id="SignUp__form" className="form" onSubmit={(e) => handleSubmit(e)}>
                    <p>Username</p>
                    <input id="username" type="text" placeholder="username_123" />
                    <p>Email *</p>
                    <input id="email" type="email" placeholder="email@gmail.com" />
                    <p>Password *</p>
                    <input type="password" placeholder="password@123" />
                    <p>Confirm Password *</p>
                    <input type="password" placeholder="password@123" />
                    <button className="submit__btn" type="submit">Sign Up</button>
                </form>
                <p className="notLogIn">Already Signed In? <Link to="/login">L</Link></p>
            </div>
        </section>
    )
}