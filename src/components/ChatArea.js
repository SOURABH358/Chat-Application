import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { AiOutlineSend, AiOutlineLink } from "react-icons/ai";
import { BsFillPersonPlusFill, BsCameraVideoFill, BsTelephoneFill } from "react-icons/bs";
import { ChatContext } from "../Context/ChatContext";
import { AppContext } from "../Context/context";
import ChatSection from "./ChatSection";
import { db, storage } from "./firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export function ChatArea() {
    const [text, setText] = useState('');
    const [img, setImg] = useState(null);
    const { state } = useContext(ChatContext);
    const { currentUser } = useContext(AppContext)
    async function handleSubmit() {
        if (img) {
            const storageRef = ref(storage, `${uuid()}.jpg`);

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", state.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            })
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", state.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now()
                })
            });
        }
        await updateDoc(doc(db, "userChat", currentUser.uid),{
            [state.chatId+".userInfo.lastMessage"]: text,
            [state.chatId+".userInfo.messageDate"]: serverTimestamp()
        })
        await updateDoc(doc(db, "userChat", state.user.uid),{
            [state.chatId+".userInfo.lastMessage"]: text,
            [state.chatId+".userInfo.messageDate"]: serverTimestamp()
        })
        setImg(null);
        setText('');
    }
    return (
        <div className="chat__area">
            <nav className="navbar">
                <div className="account__profile">
                    <img src={state.user.img ? state.user.img : "/assets/default.jpg"} alt="account-pic" />
                    <p>{state.user.displayName ? state.user.displayName : ""}</p>
                </div>
                <p style={{fontWeight:"600"}}>CHatZ</p>
                <div className="chat__icons">
                    <BsCameraVideoFill className="icons"/>
                    <BsTelephoneFill className="icons"/>
                    <BsFillPersonPlusFill className="icons"/>
                </div>
            </nav>
            <ChatSection />
            <div className="message__area">
                <form className="message__form">
                    <input type="text" placeholder="Type..."
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                    <div className="message__icons">

                        <label htmlFor="change__pic"><AiOutlineLink className="icons" />
                            <input id="change__pic" type="file" name="change__pic" accept="image/*"
                                onChange={(e) => setImg(e.target.files[0])} /></label>
                        <button type="button"><AiOutlineSend className="icons" onClick={handleSubmit} /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}