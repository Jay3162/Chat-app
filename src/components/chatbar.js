import React, {useState} from 'react';

export default function Chatbar({socket}) {
    const [message, setMessage] = useState("")
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