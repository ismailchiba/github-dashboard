import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";
import "../styles/Header.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { GoXCircleFill } from 'react-icons/go';


const ContentHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {}; // Get userData from location state
  const username = userData?.login; // Extract the username
  const [repoName, setRepoName] = useState("");

  const handleSearch = () => {
    if (repoName) {
      // Navigate to the repository stats page, passing the repoName as a parameter
      navigate('/repository-stats', { state: { repoName, username, userData } });
    }
  };

  const LogOut = () => {
    navigate('/');
  }
  return (
    <div className="content--header">
      <h2 className="header--title">
        Dashboard
      </h2>
      <div className="header--activity">
        <div className="search-box">
          <input type="text"
           placeholder="Serach for repositories."
           id="repoName" 
           name="repoName"
           value={repoName}
           onChange={(e) => setRepoName(e.target.value)}
          />
          <button onClick={handleSearch}><GoSearch/></button>
        </div>
        <div className="logout-btn" onClick={LogOut}>
        <GoXCircleFill/>
        </div>
      </div>
    </div>
  )
}

export default ContentHeader