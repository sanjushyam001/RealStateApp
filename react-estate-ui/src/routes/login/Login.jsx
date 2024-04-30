import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import apiRequest from "../../lib/apiRequest";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const { updateUser } = useContext(AuthContext)
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setError("")
            setIsLoading(true)
            const formData = new FormData(e.target);
            const username = formData.get("username");
            const password = formData.get("password");
            console.log(username, password);
            const resp = await apiRequest.post("/auth/login", {
                username,
                password,
            });
            updateUser(resp.data)
            navigate("/")
        } catch (error) {
            setError(error.response.data.message)
        } finally {
            setIsLoading(false)
        }
    };
    return (
        <div className="login">
            <div className="loginContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome Back</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="password" type="password" placeholder="Password" />
                    <button disabled={isLoading}>Login</button>
                    {error && <span>{error}</span>}
                    <Link to={"/register"}>Don't you have an account?</Link>
                </form>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
};

export default Login;
