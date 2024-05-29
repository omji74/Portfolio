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
          <a href="https://linktr.ee/omji74" className="nav-link">Profile</a>
        </li>
        <li className="nav-item">
          <a href="https://icpc.global/ICPCID/6ETECHHZJHI8" className="nav-link">Achivements</a>
        </li>
        <li className="nav-item">
          <a href="https://api.whatsapp.com/send/?phone=8057417617&text&type=phone_number&app_absent=0" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
