import React, {useRef, useState} from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import { Signup } from "../firebase";

export default function Register({socket}) {
    // const username = useRef();
    const email = useRef();
    const password = useRef();
    const [req, setReq] = useState(false);
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await Signup(email.current.value, password.current.value);
            setReq(true);
            socket.emit("newRegUser", {username, socketID: socket.id, email, password})
            // navigate("/login")
            console.log(req)
        } catch(error) {
            console.log(error)
        }
        if (req) {
            navigate("/login")
            // return (
            //     <redirect to="/login"/>
            // )
        }
    }

    return (
        <div className="reg-container">
            <form className="reg-form" onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <label>Email</label>
                <input className="reg-email"
                // value={email}
                ref={email}
                required
                ></input>
                <label>Username</label>
                <input className="reg-username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                // ref={username}
                ></input>
                <label>Password</label>
                <input className="reg-password"
                // value={password}
                ref={password}
                required
                ></input>
                <button className="reg-btn">Continue</button>
                <Link to="/login">Already have an account?</Link>
            </form>
        </div>
    )
}