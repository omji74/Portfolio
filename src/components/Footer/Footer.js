import React from 'react';
import './Footer.css'

const Footer = ({ copyright = '&copy; 2024 Omji Dwivedi' }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="company-info">
          <p className="company-name">Contact Me</p>
          <p className="contact-info">
            <a href="mailto:omjidwivedi49@gmail.com">Gmail</a>
          </p>
        </div>
        <div className="social-links">
          {/* Add social links here */}
        </div>
      </div>
      <p className="copyright"><h3> By : Om Ji Dwivedi</h3></p>
    </footer>
  );
};

export default Footer;
