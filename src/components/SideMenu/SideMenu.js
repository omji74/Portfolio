
import React from 'react';
import './style.css'; // Assuming your CSS file is named 'style.css'

const SideMenu = () => {
  return (
    <aside className="side-menu">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/omji74/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> 
          </a>
        </li>
        <li>
          <a href="https://x.com/omji74" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> 
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCI2fdM7xiO4K_Cs9E439C3Q" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> 
          </a>
        </li>
        <li>
          <a href="https://github.com/omji74" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> 
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
