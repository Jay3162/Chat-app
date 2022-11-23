import React from 'react';

export default function Profile() {
    return (
        <div className="prof-container">
            <div className="prof-settings">
                <h2>User Settings</h2>
                <ul>
                    <li>Account</li>
                    <li>Account</li>
                    <li>Account</li>
                    <li>Account</li>
                    <li>Account</li>
                </ul>
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