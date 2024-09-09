import React, { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import {
  GoHomeFill,
  GoRepo,
  GoCalendar,
  GoCheckCircleFill,
} from "react-icons/go";
import { useNavigate } from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar({ userData }) {
  const [isOpen, setIsopen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsopen(!isOpen);
  };
  const handleRepoClick = () => {
      navigate('/Repositories', { state: { userData } }); // Pass username in state
  };
  const handleHomeClick = () => {
    navigate('/Home', { state: { userData } }); // Pass username in state
};

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="sidebar-card">
        <img src={ userData.avatar_url } alt="User picture" className="user-logo" />
        <hr />
        <div className="menu-list">
          <a href="/Home" className="item" onClick={handleHomeClick}>
            <GoHomeFill className="icon" />
            Overview
          </a>
          <a href="/Repositories" className="item" onClick={handleRepoClick}>
            <GoRepo className="icon" />
            Repositories
          </a>
          <a href="#" className="item">
            <GoCheckCircleFill className="icon" />
            Activities
          </a>
          <a href="#" className="item">
            <GoRepo className="icon" />
            Contributions
          </a>
          <a href="#" className="item">
            <GoCalendar className="icon" />
            Calendar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
