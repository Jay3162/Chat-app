import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Chatbar from './chatbar'
import { useAuth } from '../firebase';

export default function Body({socket, messages, authMessages}) {
    const navigate = useNavigate("/");
    const currentUser = useAuth();

    console.log(socket)
    console.log(currentUser)

    return (
        <div className="body-container" data-testid="chatbody">
            {authMessages ? authMessages.map(msg => {
                return (            
                <div className="user-msg">
                    <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                    <div className="user-inner">
                        <p>You</p>
                        <p className="user-txt">{msg.text}</p>
                    </div>  
                </div>)
            }) : authMessages.map(msg => {
                <div className="user-msg">
                    <img className="profile-pic" src="images/placeholder-profile-pic.png"/>
                    <div className="user-inner">
                        {msg.uid === currentUser.uid ? <p>{currentUser.email}</p> : <p>placeholder</p>}
                        <p className="user-txt">{msg.text}</p>
                    </div>  
                </div>})}      
            <Chatbar socket={socket}/>
        </div>
    )
}