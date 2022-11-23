import React, {useRef, useState} from "react";
import { Redirect } from "react-router-dom";
import Signup from "../../../server/firebase";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const [req, setReq] = useState(false);
    // const [username, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await Signup(email.current.value, password.current.value);
        } catch(error) {
            console.log(error)
        }
        if (req) {
            return (
                <Redirect to="/login"/>
            )
        }
    }

    return (
        <div className="reg-container">
            <form className="reg-form" onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <label>Email</label>
                <input className="reg-email"
                // value={email}
                // onChange={(e) => setUserName(e.target.value)}
                ref={email}
                ></input>
                <label>Username</label>
                <input className="reg-username"
                // value={username}
                // onChange={(e) => setEmail(e.target.value)}
                ref={username}
                ></input>
                <label>Password</label>
                <input className="reg-password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                ref={password}
                ></input>
                <button className="reg-btn">Continue</button>
                <a>Already have an account?</a>
            </form>
        </div>
    )
}