import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'react-lottie';
import animationData from './animationData.json'; // Ensure you have a Lottie animation JSON

function Home() {
  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="Home">
      <header>
        {/* Header content (logo, title, etc.) */}
      </header>

      <main>
        <section className="content-section">
          <div className="text-container">
            <h1>Hi EveryOne &hearts;</h1>
            <TypeAnimation
              sequence={[
                `Welcome to My Portfolio!`,
                1000,
                `I'm a Web Developer & Android Dev`,
                1000,
                `& Competitive Programmer.`,
                1000,
                '',
              ]}
              speed={50}
              style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
              repeat={Infinity}
            />
            <h2>Skills</h2>
            <div className="skill" style={{ display: 'flex' }}>
              <table>
                {/* Skills table content */}
              </table>
            </div>
          </div>

          {/* Lottie animation component */}
          <div className="lottie-container">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>

          <div className="image-container">
            <img
              src="https://i.ibb.co/Kj36D3r/IMG-20231118-214651-removebg-preview.jpg"
              alt="Your Profile Picture"
            />
          </div>

          <div className="about-section">
            <a href="/"><h2>About</h2></a>
            <p>
              I'm a passionate tech enthusiast currently pursuing a BTech in Computer Science and Engineering (3rd year) at NITRA Technical Campus Ghaziabad. Driven by a thirst for knowledge and a desire to make a mark in the ever-evolving tech landscape, I'm constantly seeking opportunities to learn, grow, and contribute.
            </p>
          </div>

          <div className="about-section">
            <a href="/"><h2>Project</h2></a>
            <div>
              <h4 className="project">
                <a href="https://feedback-app-seven-beta.vercel.app/">1. Feedback App</a>
              </h4>
              <p>
                Using CRUD Operation, users can give feedback. Developed with React, users can edit or delete feedback and see average ratings. More details on my{' '}
                <a href="https://github.com/omji74/FEEDBACK_APP">GitHub Repo</a>.
              </p>
            </div>
            <div>
              <h4 className="project">
                <a href="https://yelp-camp-lovat.vercel.app/campgrounds">2. Blogging App</a>
              </h4>
              <p>
                Created a MERN stack web application with user authentication. Stores campgrounds data in MongoDB. Find more on{' '}
                <a href="https://github.com/omji74/Yelp_Camp">GitHub Repo</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Your Portfolio. All rights reserved.</p>
        <p>Made with ❤️ and React</p>
      </footer>
    </div>
  );
}

export default Home;
