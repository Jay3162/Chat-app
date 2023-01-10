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

    const navigate = useNavigate();

    const handleLeave = (event) => {
        event.preventDefault();
        Logout();
        navigate("/");
    }

    useEffect(() => {
        // retrieve the most recent messages 
        socket.on("newUserResponse", data => setUsers(data))
        console.log(users)
    }, [socket, users])
    useEffect(() => {
        socket.on("newRegUserResponse", data => setLoggedUsers(data));
        if (loggedUsers.length > 0) {
            setCheck(!check);
        }
        
        console.log(loggedUsers[loggedUsers.length-1]);
        console.log(loggedUsers);
    }, [socket, loggedUsers])
    
    return (
        <div className="users-list">
                <div className="user">
                    {/* render username of current user */}
                    <div className="user-wrapper">
                        <div className="user-inner-wrapper">
                            <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                            {check ? <p>{loggedUsers[loggedUsers.length-1][0]}</p> : <p><ClipLoader color={"#ccc"} size={"2vw"}/></p>}
                        </div>
                    <div className="leave-wrapper">
                    <button className="leave-btn" onClick={handleLeave}>Leave Chat</button>
                    </div>
                </div>
                </div>
                <div className="user-prof">
                    {/* {loggedUsers.map(logged => <div className="user" key={logged[1]}>
                        <img className="profile-pic-sml" src="images/placeholder-profile-pic.png"/>
                        <div className="user-data">
                            <p className="user-title">{logged[0]}</p>
                            <p className="user-hash">#{logged[1].substring(0, 5).toLowerCase()}</p>
                        </div>
                    </div>)} */}
                    
                    {<div className="user">
                        <img className="profile-pic-sml" src="images/placeholder-profile-pic.png"/>
                        <div className="user-data">
                        {check ? <p className="user-title">{loggedUsers[loggedUsers.length-1][0]}</p> : <p><ClipLoader color={"#ccc"} size={"1,vw"}/></p>}
                            {/* .substring(0, 5).toLowerCase() */}
                        </div>
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