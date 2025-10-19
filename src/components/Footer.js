import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="footer">
      <div className="footer-social-links">
        <a href="https://github.com/Ahmed-Umer-Farooq" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/umer-farooq-497522309" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-email">
        <a href="mailto:btumer83@gmail.com">btumer83@gmail.com</a>
      </p>
      <div className="footer-copyright">
        &copy; {year} Ahmed Umer Farooq. Designed in Peshawar.
      </div>
    </footer>
  );
}

export default Footer;