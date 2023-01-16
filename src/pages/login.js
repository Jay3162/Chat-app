import React, {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Signin, useAuth } from "../firebase";

export default function Login({socket}) {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const currentUser = useAuth();
    const navigate = useNavigate();
    let nameList = [];

    socket.on("user already exists", () => {
        console.log("User Taken! Please use another username");
    })

    const handleLogin = (e) => {
        e.preventDefault();
            try {
                if (nameList.includes(username.current.value)) {
                    return;
                }
                Signin(email.current.value, password.current.value)
                const uid = currentUser.uid;
                const newUsername = username.current.value;
                const newEmail = email.current.value;
                const newPassword = password.current.value;
                const socketID = socket.id
                const data = {"newUsername" : newUsername, "socketID" : socketID, "newEmail" : newEmail, "newPassword" : newPassword, "uid" : uid}
                console.log(data)
                socket.emit("newRegUser", data)
                nameList.push(newUsername);
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
                <input className="reg-username" ref={username} required data-testid="login-name"></input>
                <label>Email</label>
                <input className="reg-email" ref={email} required data-testid="login-email"></input>
                <label>Password</label>
                <input className="reg-password" ref={password} required type="password" data-testid="login-password"></input>
                <button className="reg-btn" type="submit" data-testid="sub-btn">Continue</button>
                <span className="log-reg">
                    <p>Need an account? <Link to="/register">Register</Link></p> 
                </span>
            </form>
        </div>
    )
}