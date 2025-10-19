import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero({ projects }) {
  const roles = [
    'MERN Stack Developer',
    'Selenium Automation Expert',
    'Web Scraping Specialist',
    'Full-Stack Engineer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && currentText === currentRole) {
      // Finished typing, wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Type or delete next character
      const speed = isDeleting ? 70 : 100;
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-name">Ahmed Umer Farooq</h1>
        
        <h2 className="hero-title">
          <span>{currentText}</span>
          <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </h2>
        
        <p className="hero-pitch">
          Full-Stack Developer specializing in MERN Stack (MongoDB, Express, React, Node.js) 
          with expertise in Selenium automation and web scraping. I build scalable applications 
          and create intelligent automation solutions.
        </p>
        
        <div className="hero-buttons">
          <Link to="/projects" className="hero-button primary">
            View All Projects
          </Link>
          <a href="#footer" className="hero-button secondary">
            Contact Me
          </a>
        </div>
      </div>

      {projects && projects.length > 0 && (
        <div className="hero-showcase-grid">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className="hero-showcase-item"
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="hero-showcase-gif"
              />
              <div className="hero-showcase-overlay"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Hero;