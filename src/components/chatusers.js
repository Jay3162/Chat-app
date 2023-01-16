import React, {useState, useEffect} from 'react';
import { useAuth } from '../firebase';
import {MdHeadphones} from 'react-icons/md'
import {FaMicrophone} from 'react-icons/fa'
import {BsGearFill} from 'react-icons/bs'
import { Logout } from '../firebase';
import { useNavigate } from 'react-router';
import ClipLoader from "react-spinners/ClipLoader";

export default function Chatusers({socket}) {
    const currentUser = useAuth();
    const [users, setUsers] = useState([])
    const [loggedUsers, setLoggedUsers] = useState([])
    const [check, setCheck] = useState(false);
    const [account, setAccount] = useState(null);

    const navigate = useNavigate();

    const handleLeave = (event) => {
        event.preventDefault();
        console.log("new", loggedUsers)
        Logout();
        navigate("/");
    }

    useEffect(() => {
        // retrieve the most recent messages 
        socket.on("newUserResponse", data => setUsers(data));
    }, [socket, users])
    useEffect(() => {
        socket.on("newRegUserResponse", data => setLoggedUsers(data));
        if (loggedUsers.length > 0) {
            setCheck(true);
        }

    }, [socket, loggedUsers, setCheck])

    useEffect(() => {
        for (let i = 0; i < loggedUsers.length; i++) {
            if (currentUser.uid === loggedUsers[i].uid) {
                setAccount(loggedUsers[i].newUsername);
            }
        }
        
    }, [loggedUsers])

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            if (currentUser) {
                socket.emit('remove user', currentUser)
            }
        })
    }, [currentUser])
    
    return (
        <div className="users-list">
                <div className="user">
                    {/* render username of current user */}
                    <div className="user-wrapper">
                        {check ? <div>{loggedUsers.map((users, i) => {
                            return (
                            <div className="user-inner-wrapper" key={i}>
                                <img className="profile-pic" src="images/placeholder-profile-pic.png" alt="profile-pic"/>
                                <p data-testid="user">{users.newUsername}</p>
                            </div>)
                        })}
                        </div> : 
                        <p><ClipLoader color={"#ccc"} size={"2vw"}/></p>}
                        
                    <div className="leave-wrapper">
                        <button className="leave-btn" onClick={handleLeave} data-testid="leave-btn">Leave Chat</button>
                    </div>
                </div>
                </div>
                <div className="user-prof">
                    {<div className="user">
                        {check ? <div className="user">
                            <div className="user-data">
                                <img className="profile-pic-sml" src="images/placeholder-profile-pic.png" alt="profile-pic"/>
                                <p className="user-title">{account}</p>
                            </div>
                        </div> : <div></div>}
                    </div>}

                    <div className="lower-icons">
                        <button className="profile-cog"><MdHeadphones/></button>
                        <button className="profile-cog"><FaMicrophone/></button>
                        <button className="profile-cog"><BsGearFill/></button>
                    </div>
                </div>
        </div>
    )
}