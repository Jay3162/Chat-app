import React, { useState, useEffect, useRef } from 'react';
import Body from './chatbody';
import Chatusers from './chatusers';

export default function MainChat ({socket}) {
    const [authMessages, setAuthMessages] = useState([]);
    const [typeMsg, setTypeMsg] = useState("");
    const lastMsg = useRef(null);

    useEffect(() => {
        lastMsg.current?.scrollIntoView({behavior: "smooth"})
    }, [authMessages])

    useEffect(() => {
        socket.on("authResponse", data => setAuthMessages([...authMessages, data]))
    })

    useEffect(() => {
        socket.on("typer", data => {
            setTypeMsg(data);
        }, [socket])
    })

    return (
        <div className="chat-container" data-testid="main-chat">
            <Chatusers socket={socket}/>
            <div>
                <Body socket={socket} authMessages={authMessages} lastMsg={lastMsg} typeMsg={typeMsg}/>
            </div>
            {/* <div className="channel-container"></div> */}
        </div>
    )
}