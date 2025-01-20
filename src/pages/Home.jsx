import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import myImage from "../assets/online.jpg"; 

const Home = ({ courses }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <div className="home-page">
      <div className="welcome-section">
      <img src={myImage} alt="Descriptive Alt Text" className="home-image" />
        <h1 className="welcome-title">Welcome to the Online Learning Platform</h1>
        <p className="welcome-text">
          Learn new skills, advance your career, and explore endless possibilities with our expertly curated courses.
        </p>
        <button
          className="browse-courses-button"
          onClick={() => navigate('/courses')}
        >
          Browse Courses
        </button>
      </div>
    </div>
  );
};
export default Home;
