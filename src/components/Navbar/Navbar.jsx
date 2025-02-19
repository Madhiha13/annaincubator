import React from 'react'; 
import Vector from "../../assets/Frame_2_nmqjja.svg"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo-container" href="/">
        <img 
          alt=" "
          fetchpriority="high" 
          width="500" 
          height="500" 
          decoding="async" 
          className="logo" 
          src={Vector}
        />
      </a>
      <ul className="nav-links">
        <li><a href="/about/">About</a></li>
        <li><a className="active" href="/incubation/">Incubation</a></li>
        <li><a href="/coworking/">Coworking</a></li>
        <li><a href="/people/">People</a></li>
        <li><a href="/portfolio/">Portfolio</a></li>
      </ul>
      <a className="contact-button" href="/contact/">Contact</a>
    </nav>
  );
};

export default Navbar;
