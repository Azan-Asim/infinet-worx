import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false); // State for overlay visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the navbar is scrolled

  const toggleOverlay = () => {
    setIsOverlayActive(!isOverlayActive); // Toggle overlay state
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(currentScrollPos > 50); // Set true if scrolled more than 50px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Listen for scroll events

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    };
  }, []);

  // Close overlay when a link is clicked
  const closeOverlayOnLinkClick = () => {
    setIsOverlayActive(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <span className={`company-name ${isScrolled ? 'visible' : ''}`}>
            INFINETWORX
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#discover">Discover Infintworx</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#about">About Us</a>
        </div>

        {/* Get Started Button */}
        <button className="button">Get Started</button>

        {/* Mobile Toggle Button */}
        <div
          className="toggle-button"
          id="toggle-button"
          onClick={toggleOverlay}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div className={`overlay ${isOverlayActive ? 'active' : ''}`} id="overlay">
        {/* Close Button */}
        <button
          className="close-button"
          id="close-button"
          onClick={toggleOverlay}
        >
          &times;
        </button>

        {/* Overlay Content */}
        <div className="overlay-content">
          <div className="logos">
            <img src="logo.png" alt="Logo" />
          </div>

          {/* Mobile Navigation Links */}
          <nav className="nav-links">
            <a href="#home" onClick={closeOverlayOnLinkClick}>
              Home
            </a>
            <a href="#discover" onClick={closeOverlayOnLinkClick}>
              Discover Infintworx
            </a>
            <a href="#services" onClick={closeOverlayOnLinkClick}>
              Services
            </a>
            <a href="#contact" onClick={closeOverlayOnLinkClick}>
              Contact
            </a>
            <a href="#about" onClick={closeOverlayOnLinkClick}>
              About Us
            </a>
          </nav>

          {/* Get Started Button in Overlay */}
          <button className="button" onClick={closeOverlayOnLinkClick}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
