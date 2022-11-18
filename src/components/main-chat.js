import React, { useState, useEffect } from 'react';
import Body from './chatbody';
import Chatusers from './chatusers';

export default function MainChat ({socket}) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on("chatResponse", data => setMessages([...messages, data]))
    })
    return (
        <div className="chat-container">
            <Chatusers socket={socket}/>
            <div>
                <Body socket={socket} messages={messages}/>
            </div>
            <div className="channel-container"></div>
        </div>
    )
}