import React from "react";

export default function Register() {
    return (
        <div className="reg-container">
            <form className="reg-form">
                <h2>Create an account</h2>
                <label>Email</label>
                <input className="reg-email"></input>
                <label>Username</label>
                <input className="reg-username"></input>
                <label>Password</label>
                <input className="reg-password"></input>
                <button className="reg-btn">Continue</button>
                <a>Already have an account?</a>
            </form>
        </div>
    )
}