import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { 
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => { 
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-left">
        <Link to="/browse" className="navbar-logo">AF.</Link>
        <div className="navbar-links">
          <NavLink to="/browse">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="nav-right">
        {/* We can add search or other icons here later */}
      </div>
    </div>
  );
}

export default Navbar;