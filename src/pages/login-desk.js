import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi';

export default function DeskLogin({socket}) {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
        localStorage.setItem("username", username)
        socket.emit("newUser", {username, socketID: socket.id})
        navigate("/chat");

    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/login")
    }
    return (
        <div className="desk-container">
            <header className="desk-header">
                <a href="#" className="desk-logo">Logo</a>
                <span className="desk-span-el">About us</span>
                <span className="desk-span-el">Blog</span>
                <span className="desk-span-el">Safety</span>
                <span className="desk-span-el"><button className="desk-log-btn" onClick={handleLogin}>Login</button></span>
            </header>
            <div className="desk-form-wrapper">
                <form className="desk-form" onSubmit={handleSubmit}>
                    <h1>Imagine a place...</h1>
                    <p></p>
                    <div className="desk-main">
                        <input className="desk-input" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        <button className="desk-btn">{<FiArrowRight/>}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}