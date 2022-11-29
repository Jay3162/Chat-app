import React, {useState, useEffect} from 'react';
import { useAuth } from '../firebase';
import {MdHeadphones} from 'react-icons/md'
import {FaMicrophone} from 'react-icons/fa'
import {BsGearFill} from 'react-icons/bs'

export default function Chatusers({socket}) {
    const currentUser = useAuth();
    const [users, setUsers] = useState([])
    const [loggedUsers, setLoggedUsers] = useState([])
    const [name, setName] = useState("" || currentUser);
    
    console.log(currentUser)
    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])
    useEffect(() => {
        socket.on("newRegUserResponse", data => setLoggedUsers(data))
        console.log(loggedUsers)
    }, [socket, loggedUsers])
    return (
        <div className="users-list">
            {name ? <p>{name.email}</p> : <div></div>}
            {users.map(user => <div className="user" key={user.socketID}>
                {console.log(user)}
                <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                <p >{user.username}</p>
            </div>)}
            {users.map(user => <div className="user-prof">
                <img className="profile-pic-sml" src="images/placeholder-profile-pic.png"/>
                <div className="user-data">
                    <p>{user.username}</p>
                    
                    <p>#01285</p>
                </div>
                <div className="lower-icons">
                    <MdHeadphones/>
                    <FaMicrophone/>
                    <BsGearFill/>
                </div>
            </div>)}
            {loggedUsers.map(logged => <div className="user" key={logged.socketID}>
                {console.log(logged)}
                <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                <p>{}</p>
            </div>)}

        </div>
    )
}