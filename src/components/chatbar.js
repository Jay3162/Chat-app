import React, {useState} from 'react';
import { useAuth } from '../firebase';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsGiftFill } from 'react-icons/bs';
import { AiOutlineGif } from 'react-icons/ai';
import { FaSmileWink } from 'react-icons/fa';

export default function Chatbar({socket}) {
    const [message, setMessage] = useState("")
    const currentUser = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
         if (message.trim() && currentUser) {
            socket.emit("authmessage", {
                text: message,
                name: currentUser.newUsername || localStorage.getItem("username"),
                email: currentUser.newEmail,
                password: currentUser.newPassword,
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
                uid: currentUser.uid
            })
        }
        setMessage("");
    }
    return (
        <form onSubmit={handleSubmit} className="chatbar">
            <button className="startbtn"><BsFillPlusCircleFill/></button>
            <input className="inputbar" data-testid="chatbar" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Message away..."></input>
            <button className="innerbtn"><BsGiftFill/></button>
            <button className="innerbtn"><AiOutlineGif/></button>
            <button className="sendbtn"><FaSmileWink/></button>
        </form>
    )
}