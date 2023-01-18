import React, {useState, useEffect, useRef} from 'react'
import Chatbar from './chatbar'
import { useAuth } from '../firebase';

export default function Body({socket, authMessages, lastMsg, typeMsg}) {
    // const currentUser = useAuth();
    const [check, setCheck] = useState(false);
    const [loggedUsers, setLoggedUsers] = useState([]);

    const handleTyping = () => {
        socket.emit("typing", localStorage.getItem("newUsername") + " is typing...")
    }

    useEffect(() => {
        socket.on("newRegUserResponse", data => setLoggedUsers(data));
        if (loggedUsers.length > 0) {
            setCheck(true);
        }
    }, [socket, loggedUsers])

    return (
        <div className="body-container" data-testid="chatbody">
            {/* wait for messages */}
                {check ? authMessages.map((msg, i) => {
                    return (
                        <div key={i}>
                            {loggedUsers.map((user, i) => {
                                return(
                                <div className="user-msg" key={i}>
                                    <div>
                                        {/* check user ID against message ID and render correct username above message */}
                                        {user.socketID === msg.socketID ? 
                                        <div className="user-upper">
                                            <img className="profile-pic" src="images/placeholder-profile-pic.png" alt="profile-pic"/>
                                            <div className="user-inner">
                                                <p>{user.newUsername}</p>
                                                <p className="user-txt">{msg.text}</p>
                                            </div>
                                        </div> : <div></div>}
                                    </div>
                                </div>)
                            })}
                        </div>
                        
                    )
                }) : <div></div>}
            <div onKeyDown={handleTyping} >
                <p>{typeMsg}</p>
            </div>
            <div ref={lastMsg}></div>
            <Chatbar socket={socket}/>
        </div>
    )
}