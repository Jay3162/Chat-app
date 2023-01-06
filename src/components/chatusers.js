import React, {useState, useEffect} from 'react';
import { useAuth } from '../firebase';
import {MdHeadphones} from 'react-icons/md'
import {FaMicrophone} from 'react-icons/fa'
import {BsGearFill} from 'react-icons/bs'
import Profile from '../pages/profile';


export default function Chatusers({socket}) {
    const currentUser = useAuth();
    const [users, setUsers] = useState([])
    const [loggedUsers, setLoggedUsers] = useState([])
    const [name, setName] = useState("" || currentUser);
    const [toggle, setToggle] = useState(false);

    const Dropdown = (e, props) => {
        e.preventDefault();
        <Profile/>
    }

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
        console.log(users)
    }, [socket, users])
    useEffect(() => {
        socket.on("newRegUserResponse", data => setLoggedUsers(data))
        console.log(loggedUsers[0])
    }, [socket, loggedUsers])
    return (
        <div className="users-list">
                {!currentUser ? users.map(user => <div className="user" key={user.socketID}>
                    <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                    <p >{user.username}</p>
                </div>) : loggedUsers.map((user, id) => <div className="user" key={user.socketID}>
                    <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                    <p>{user[id]}</p>
                </div>)}
                <div className="user-prof">
                    {loggedUsers.map(logged => <div className="user" key={logged[1]}>
                        <img className="profile-pic-sml" src="images/placeholder-profile-pic.png"/>
                        <div className="user-data">
                            <p className="user-title">{logged[0]}</p>
                            <p className="user-hash">#{logged[1].substring(0, 5).toLowerCase()}</p>
                        </div>
                    </div>)}

                    <div className="lower-icons">
                        <button className="profile-cog"><MdHeadphones/></button>
                        <button className="profile-cog"><FaMicrophone/></button>
                        <button className="profile-cog" ><BsGearFill/></button>
                    </div>
                </div>
        </div>
    )
}