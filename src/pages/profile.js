import React from 'react';
import { Logout } from '../firebase';
import { useAuth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Profile({socket}) {
    const currentUser = useAuth();
    const navigate = useNavigate();
    const Signout = () => {
        try {
            if (currentUser) {
                socket.emit("logout", data => {
                    console.log(data)
                })
                Logout(currentUser.email, currentUser.password)
                navigate("/")
            }   
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="prof-container">
            <div className="prof-settings">
                <h2>User Settings</h2>
                <ul>
                    <li>My Account</li>
                    <li>Privacy & Safety</li>
                    <li>Authorized Apps</li>
                    <li>Connections</li>
                </ul>
                <h2>Billing Settings</h2>
                <ul>
                    <li>Nitro</li>
                    <li>Server Boost</li>
                    <li>Subscriptions</li>
                    <li>Gift Inventory</li>
                    <li>Biling</li>
                </ul>
                <h2>App Settings</h2>
                <ul>
                    <li>Appearance</li>
                    <li>Accessiblity</li>
                    <li>Voice & Video</li>
                    <li>Text & images</li>
                    <li>Notifications</li>
                    <li>Keybinds</li>
                    <li>Language</li>
                </ul>
                <ul>
                    <li>Change Log</li>
                    <li><a href="#">Log Out</a></li>
                </ul>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="prof-main">
                <h2>My Account</h2>
                
                <div className="prof-info-wrapper">
                <div className="prof-banner"></div>
                <div className="prof-inner">
                    <div className="prof-inner-left">
                        <div className="img-container"></div>
                        <h2>BestBuddy</h2>
                        <p>...</p>
                    </div>
                    <div className="edit-btn-wrapper">
                        <button className='edit-user-btn'>edit user profile</button>
                    </div>
                </div>
                    <main className="prof-info">
                        <div className="username">
                            <p>username</p>
                            <button className="prof-edit">edit</button>
                        </div>
                        <div className="email">
                            <p>username</p>
                            <button className="prof-edit">edit</button>
                        </div>
                        <div className="phone">
                            <p>username</p>
                            <button className="prof-edit">edit</button>
                        </div>
                    </main>
                    </div>
                <div className="password-container">
                    <h2>Password</h2>
                    <button className="pw-btn">change password</button>
                </div>
            </div>
            <div>
                <button>close</button>
            </div>
        </div>
    )
}