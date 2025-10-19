// --- src/components/AboutMe.js ---

import React from 'react';
import './AboutMe.css';
import myPicture from '../assets/profile-pic.jpg';

function AboutMe() {
  const skills = [
    'MongoDB', 'Express.js', 'React', 'Node.js',
    'JavaScript', 'Python', 'Selenium', 'Web Scraping',
    'Beautiful Soup', 'Requests', 'HTML/CSS', 'Git',
    'REST APIs', 'Automation Testing', 'Chrome DevTools'
  ];

  return (
    <section className="about-section" id="about-me-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="image-wrapper">
              <img 
                src={myPicture} 
                alt="Ahmed Umer Farooq" 
                className="about-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-subtitle">
              Full-Stack Developer & Selenium Automation Expert
            </h3>
            
            <div className="availability-badge">
              <span className="status-dot"></span>
              Available for Freelance & Full-Time Opportunities
            </div>

            <p className="about-description">
              I build full-stack web applications using the MERN Stack (MongoDB, Express.js, React, Node.js) 
              and automate complex workflows with Selenium and Python. Specializing in scalable applications, 
              automated testing, and web scraping solutions.
            </p>
            
            <div className="what-i-deliver">
              <h4 className="deliver-title">What I Deliver</h4>
              <ul className="deliver-list">
                <li>Fast, responsive web applications with modern UI/UX</li>
                <li>RESTful APIs and robust backend systems</li>
                <li>Automated testing & browser automation with Selenium</li>
                <li>Web scraping solutions for data extraction</li>
                <li>Clean, maintainable, and well-documented code</li>
              </ul>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">7+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{skills.length}+</span>
                <span className="stat-label">Technical Skills</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedicated</span>
              </div>
            </div>

            <div className="skills-section">
              <h4 className="skills-title">Technical Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-badge"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-location">
              <p>📍 Based in Peshawar, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;