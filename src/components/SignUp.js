import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "./firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Error from "./Error"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export default function SignUp() {
    const navigate = useNavigate();
    const [Err, setErr] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault();
        try {

            const username = e.target[0].value;
            const email = e.target[1].value;
            const password = e.target[2].value;
            const img = e.target[3].files[0];
            if (!email || !password || !username || !img) {
                throw ('email and password not provided');
            }
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, `${username}.jpg`);
            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName: username,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db, "userChat", res.user.uid), {});
                        console.log(res)
                        
                    });
                }
                );
                navigate("/")
            
        }
        catch (err) {
            setErr(true);
            setTimeout(() => {
                setErr(false)
            }, 1500);
        }
    }
    return (
        <section className="SignUp__section">
            {Err ? <Error
                message="Please provide credentials"
                color="danger" />
                : ""}
            <div className="SignUp__container">
                <h2>Sign Up</h2>
                <form id="SignUp__form" className="form" onSubmit={(e) => handleSubmit(e)}>
                    <p>Username *</p>
                    <input id="username" type="text" placeholder="username_123" autoComplete="off" />
                    <p>Email *</p>
                    <input id="email" type="email" placeholder="email@gmail.com" />

                    <p>Password *</p>

                    <input type="password" placeholder="password@123" />
                    <p>Upload Pic *</p>
                    <input id="change__pic" type="file" name="change__pic" accept="image/*" />
                    <label className="select__pic" htmlFor="change__pic">Select Pic</label>
                    <button className="submit__btn" type="submit">Sign Up</button>
                </form>
                <p className="notLogIn">Already Signed In? <Link to="/login">Log In</Link></p>
            </div>
        </section>
    )
}