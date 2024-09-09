import React from 'react';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage';
import Repositories from './pages/Repositories';
import Repostats from './pages/RepositoryStats';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/Home" element={<HomePage />} />
                <Route path="/Repositories" element={<Repositories />} />
                <Route path="/repository-stats" element={<Repostats />} />
            </Routes>
        </Router>
    );
}

export default App
