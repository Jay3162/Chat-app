import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Chatbar from './chatbar'
import { useAuth } from '../firebase';

export default function Body({socket, messages, authMessages}) {
    const navigate = useNavigate("/");
    const currentUser = useAuth();
    const [check, setCheck] = useState(false);
    
    const [loggedUsers, setLoggedUsers] = useState([]);
    useEffect(() => {
        socket.on("newRegUserResponse", data => setLoggedUsers(data));
        if (loggedUsers.length > 0) {
            setCheck(true);
        }

    }, [socket, loggedUsers])


    console.log(socket)
    console.log(currentUser)

    return (
        <div className="body-container" data-testid="chatbody">
                {check ? authMessages.map(msg => {
                    return (
                        <div>
                            {loggedUsers.map((user, i) => {
                                return(
                                <div className="user-msg" key={i}>
                                    <div>
                                        {console.log(loggedUsers)}
                                        {console.log(currentUser)}
                                        {user.newEmail === currentUser.email ? 
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
            <Chatbar socket={socket}/>
        </div>
    )
}