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

// import React, { useState } from 'react';
// import './Footer.css'
// const Footer = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Implement form submission logic here (e.g., send data to server)
//     console.log('Form submitted:', formData);

//     // Clear form data after submission (optional)
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <footer className="footer">
//       <div className="container">
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//       <p className="copyright">© 2024 Your Company Name</p>
//     </footer>
//   );
// };

// export default Footer;
