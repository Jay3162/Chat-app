import React, { useState, useEffect } from 'react';
import Body from './chatbody';
import Chatusers from './chatusers';

export default function MainChat ({socket}) {
    const [messages, setMessages] = useState([])
    const [authMessages, setAuthMessages] = useState([])
    useEffect(() => {
        socket.on("chatResponse", data => setMessages([...messages, data]))
        
    })

    useEffect(() => {
        socket.on("authResponse", data => setAuthMessages([...authMessages, data]))
    })
    return (
        <div className="chat-container">
            <Chatusers socket={socket}/>
            <div>
                <Body socket={socket} messages={messages} authMessages={authMessages}/>
            </div>
            <div className="channel-container"></div>
        </div>
    )
}