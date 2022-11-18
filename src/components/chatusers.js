import React, {useState, useEffect} from 'react';

export default function Chatusers({socket}) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])
    console.log(users)
    return (
        <div className="users-list">
            {users.map(user => <div className="user" key={user.socketID}>
                {console.log(user)}
                <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                <p >{user.username}</p>
            </div>)}
        </div>
    )
}