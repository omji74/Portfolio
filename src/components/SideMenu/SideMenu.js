
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
          <a href="https://www.youtube.com/channel/UCx_b_T_j7_o0rV0mQ8q8kng" target="_blank" rel="noopener noreferrer">
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
