import React, {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Signin, useAuth } from "../firebase";

export default function Login({socket}) {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const currentUser = useAuth();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
            try {
                Signin(email.current.value, password.current.value)
                const uid = currentUser.uid;
                const newUsername = username.current.value;
                const newEmail = email.current.value;
                const newPassword = password.current.value;
                const socketID = socket.id
                console.log(uid, newUsername, newEmail, newPassword)
                socket.emit("newRegUser", [newUsername, socketID, newEmail, newPassword, uid])
                navigate("/chat")
            } catch(err) {
                console.log(err)
            }
    }

    return (
        <div className="log-container">
            <form className="reg-form" onSubmit={handleLogin} data-testid="login">
                <h2>Welcome Back</h2>
                <label>Username</label>
                <input className="reg-username" ref={username} required></input>
                <label>Email</label>
                <input className="reg-email" ref={email} required></input>
                <label>Password</label>
                <input className="reg-password" ref={password} required type="password"></input>
                <button className="reg-btn" type="submit">Continue</button>
                <span className="log-reg">
                    <p>Need an account? <Link to="/register">Register</Link></p> 
                </span>
            </form>
        </div>
    )
}