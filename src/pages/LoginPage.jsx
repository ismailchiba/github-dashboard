import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../services/githubService";
import '../styles/LoginPage.css'
import { FaUser } from "react-icons/fa";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const fetchGitHubData = async () => {
        try {
          const data = await getUserData(username);
          setUserData(data);
          setError(null);
          // Navigate to the next page and pass the username as state
          navigate('/Home', { state: { username, userData: data } });
        } catch (error) {
          setError("username not found");
          setUserData(null);
        }
      };
    const handleSubmit = (e) => {

        e.preventDefault();    
        fetchGitHubData();
    };


    return (
        <>
        <a className="link" href="#"> <span>How to use ?</span></a>
        <div className="container">
            <div className="card">
                <div className="icon">
                    <img src="src\assets\login.png" alt="login" />
                </div>
                <h3 className="title-welcome">Welcome to :</h3>
                <h3 className="project-name">DASHI</h3>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            placeholder="Enter GitHub username"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
                        />
                    </div>
                    {error && <p>{error}</p> }
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
        <a className="link" id="buttom--link" href="#"> <span>About us</span></a>
        </>
    )
};

export default LoginPage;