import React from 'react';
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Skill</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Project</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Profile</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Achivements</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;