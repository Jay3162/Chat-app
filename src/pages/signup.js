import React, {useRef, useState} from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import { Signup } from "../firebase";

export default function Register({socket}) {
    const email = useRef();
    const password = useRef();
    const [req, setReq] = useState(false);
    const navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await Signup(email.current.value, password.current.value);
            navigate("/login")
        } catch(error) {
            console.log(error)
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