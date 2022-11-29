import React, {useRef, useEffect} from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import { Signin } from "../firebase";

export default function Login() {
    const username = useRef();
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();

    const handleClick = (e) => {
        return navigate("/chat")
    }
    const handleLogin = (e) => {
        e.preventDefault();
        try {
            Signin(email.current.value, password.current.value)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="log-container">
            <form className="reg-form" onSubmit={handleLogin}>
                <h2>Welcome Back</h2>
                <label>Username</label>
                <input className="reg-username" ref={username} required></input>
                <label>Password</label>
                <input className="reg-password" ref={password} required type="password"></input>
                <button className="reg-btn" type="button" onClick={handleClick}>Continue</button>
                <span className="log-reg">
                    <p>Need an account? <Link to="/register">Register</Link></p> 
                </span>
            </form>
        </div>
    )
}