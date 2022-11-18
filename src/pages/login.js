import React from "react";

export default function Login() {
    return (
        <div className="log-container">
            <form className="reg-form">
                <h2>Welcome Back</h2>
                <label>Username</label>
                <input className="reg-username"></input>
                <label>Password</label>
                <input className="reg-password"></input>
                <button className="reg-btn">Continue</button>
                <span className="log-reg">
                    <p>Need an account? <a>Register</a></p> 
                </span>
            </form>
        </div>
    )
}