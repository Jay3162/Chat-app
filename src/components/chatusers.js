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
    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
        console.log(users)
    }, [socket, users])
    useEffect(() => {
        socket.on("newRegUserResponse", data => setLoggedUsers(data))
        const myUser = loggedUsers[-1]
        console.log(loggedUsers)
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
            {!currentUser ? users.map(user => <div className="user-prof">
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
            </div>) : loggedUsers.map((logged, id) => <div className="user-prof" key={logged[1]}>
                <img className="profile-pic-sml" src="images/placeholder-profile-pic.png"/>
                <div className="user-data">
                    <p>{logged[id]}</p>
                    <p>#{logged[1].substring(0, 5)}</p>
                </div>
                <div className="lower-icons">
                    <MdHeadphones/>
                    <FaMicrophone/>
                    <BsGearFill/>
                </div>
            </div>)}
            {/* {users.map(user => <div className="user" key={user.socketID}>
                <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                <p >{user.username}</p>
            </div>)} */}
            {/* {users.map(user => <div className="user-prof">
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
            {loggedUsers.map(logged => <div className="user" key={logged.uid}>
                <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                <p>{logged.newUsername}</p>
            </div>)} */}
            {/* {loggedUsers.map(logged => <div className="user-prof">
                <img className="profile-pic-sml" src="images/placeholder-profile-pic.png"/>
                <div className="user-data">
                    <p>{logged.newUsername}</p>
                    
                    <p>#{logged.socketID}</p>
                </div>
                <div className="lower-icons">
                    <MdHeadphones/>
                    <FaMicrophone/>
                    <BsGearFill/>
                </div>
            </div>)} */}
        </div>
    )
}