import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Work Together</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-cards">
            <a href="mailto:btumer83@gmail.com" className="contact-card email-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <h3 className="card-title">Email Me</h3>
              <p className="card-text">btumer83@gmail.com</p>
              <span className="card-action">Send a message →</span>
            </a>

            <a 
              href="https://github.com/Ahmed-Umer-Farooq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card github-card"
            >
              <div className="card-icon">
                <FaGithub />
              </div>
              <h3 className="card-title">GitHub</h3>
              <p className="card-text">@Ahmed-Umer-Farooq</p>
              <span className="card-action">View my code →</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/umer-farooq-497522309" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card linkedin-card"
            >
              <div className="card-icon">
                <FaLinkedin />
              </div>
              <h3 className="card-title">LinkedIn</h3>
              <p className="card-text">Connect with me</p>
              <span className="card-action">View profile →</span>
            </a>
          </div>

          <div className="contact-info-box">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Peshawar, Pakistan</p>
              </div>
            </div>
            <div className="info-item">
              <div className="availability-indicator">
                <span className="status-dot"></span>
              </div>
              <div>
                <h4>Availability</h4>
                <p>Open for Freelance & Full-Time Opportunities</p>
              </div>
            </div>
          </div>

          <div className="download-resume-section">
            <h3>Want to know more?</h3>
            <a href="/Ahmed-Umer-Farooq-Resume.pdf" download className="download-resume-btn">
              <span>Download Resume</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3v11m0 0l-4-4m4 4l4-4M3 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
