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
        socket.on("newUserResponse", data => setUsers(data));
        console.log(users)
    }, [socket, users])
    useEffect(() => {
        socket.on("newRegUserResponse", data => setLoggedUsers(data));
        if (loggedUsers.length > 0) {
            setCheck(true);
        }

    }, [socket, loggedUsers, setCheck])
    
    return (
        <div className="users-list">
                <div className="user">
                    {/* render username of current user */}
                    <div className="user-wrapper">
                        {check ? <div>{loggedUsers.map((users, i) => {
                            return (
                            <div className="user-inner-wrapper" key={i}>
                                <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
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
                        {/* <img className="profile-pic-sml" src="images/placeholder-profile-pic.png"/>
                        <div className="user-data"> */}
                        {/* {check ? <p className="user-title">{loggedUsers[loggedUsers.length-1].newUsername}</p> : <p><ClipLoader color={"#ccc"} size={"1,vw"}/></p>} */}
                            {/* .substring(0, 5).toLowerCase() */}
                        {/* </div> */}
                        {check ? <div className="user">
                            {loggedUsers.map((user, i) => {
                                return (
                                <div>
                                    {currentUser.email === user.newEmail ? 
                                    <div className="user-data" key={i}>
                                        <img className="profile-pic-sml" src="images/placeholder-profile-pic.png" alt="profile-pic"/>
                                        <p className="user-title">{user.newUsername}</p>
                                    </div> : <div></div>}
                                </div>)

                            })}
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