import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">Research<span>Publications</span></a>
        
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#guarantees" className="nav-link">Guarantees</a></li>
          <li><a href="#contact" className="nav-link">Contact Us</a></li>
        </ul>

        <a href="#contact" className="nav-cta">Get a Quote</a>
      </div>
    </nav>
  );
}
