import React, { useState } from "react";
import "../src/assets/styles.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        // Simulate API login request
        if (email === "user@example.com" && password === "password123") {
            setMessage("✅ Login successful! Redirecting...");
        } else {
            setMessage("❌ Invalid email or password.");
        }
    };

    return (
        <div className="login-container">
            <h2>Squarespace Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Login;
