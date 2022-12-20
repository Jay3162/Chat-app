import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Chatbar from './chatbar'
import { useAuth } from '../firebase';

export default function Body({socket, messages, authMessages}) {
    const navigate = useNavigate("/")
    const currentUser = useAuth();
    const handleLeave = (e) => {
        e.preventDefault();
        localStorage.removeItem("username")
        navigate("/")
        window.location.reload();
    }

    return (
        <div className="body-container">            
            {messages.map(message => (
                message.name === localStorage.getItem("username") ? (
                <div className="user-msg" key={message.id}>
                    <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                    <div className="user-inner">
                        <p>You</p>
                        <p>{message.text}</p>
                    </div>
                </div>) : (
            <div className="user-msg" key={message.id}>
                <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                <div className="user-inner" >
                    <p>{message.name}</p>
                    <p>{message.text}</p>
                </div>
            </div>)
            ))}
            {authMessages.map(msg => { return (
                    <div className="user-msg" key={msg.id}>
                        <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                        <div className="user-inner">
                            <p>You</p>
                            <p>{msg.text}</p>
                        </div>
                    </div>
                )
            })}
            <Chatbar socket={socket}/>
        </div>
    )
}