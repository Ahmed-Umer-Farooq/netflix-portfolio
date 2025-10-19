import React from 'react';
import './ProfileScreen.css';
import { useNavigate } from 'react-router-dom';

// Import all profile pictures
import myPicture from '../assets/profile-pic.jpg';
import zoroPic from '../assets/Zoro.jpg';
import luffyPic from '../assets/Luffy.jpg';
import sanjiPic from '../assets/Sanji.jpg';
import abstractBg from '../assets/hero-abstract-bg.jpg'; // Import the new background

function ProfileScreen() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/browse');
  };

  return (
    <div className="profile-screen">
      <div className="profile-screen-bg">
        <img src={abstractBg} alt="Background" />
      </div>
      <div className="profile-screen-overlay"></div>

      <div className="profile-screen-content">
        <h1>Who's Watching?</h1>
        <div className="profiles-container">
          {/* Your Unlocked Profile */}
          <div className="profile" onClick={handleProfileClick}>
            <img src={myPicture} alt="Ahmed Umer Farooq" />
            <span>Ahmed Umer</span>
          </div>

          {/* Locked Profiles with your images */}
          <div className="profile locked">
            <img src={luffyPic} alt="Luffy" />
            <span>Luffy</span>
          </div>

          <div className="profile locked">
            <img src={zoroPic} alt="Zoro" />
            <span>Zoro</span>
          </div>

          <div className="profile locked">
            <img src={sanjiPic} alt="Sanji" />
            <span>Sanji</span>
          </div>
        </div>
        <button className="manage-profiles-btn">Manage Profiles</button>
      </div>
    </div>
  );
}

export default ProfileScreen;
