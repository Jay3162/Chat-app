import React, {useState} from 'react';
import { useAuth } from '../firebase';

export default function Chatbar({socket}) {
    const [message, setMessage] = useState("")
    const currentUser = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem("username")) {
            socket.emit("message", {
                text: message,
                name: localStorage.getItem("username"),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id
            }
            )

        } else if (message.trim() && currentUser) {
            socket.emit("authmessage", {
                text: message,
                name: currentUser.newUsername,
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
            <input className="inputbar" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Message away..."></input>
            <button className="sendbtn">Send</button>
        </form>
    )
}