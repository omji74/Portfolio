import React from 'react';
import './Home.css';
import {TypeAnimation} from 'react-type-animation'; // Assuming correct import syntax
// import HomePage from './HomePage';
// import Star from './Star'; // Import Star component if used

function Home() {
  return (
    <div className="Home">
      <header>
        {/* Header content (logo, title, etc.) */}
      </header>
      <main>
        <section className="content-section">
          <div className="text-container">
          <TypeAnimation
        sequence={[
          `Welcome to My Prortfolio !\nI'm a WebDeveloper & Android Dev \nand a Competitve Programmer.`,
          1000,
          "", 
        ]}
        speed={50} // Typing speed in milliseconds
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={Infinity} // Repeat animation indefinitely
      />
           
          </div>
          <div className="image-container">
        <img src="https://cdn.hackernoon.com/images/person-studing-the-cosmos-e7k88hfewrqwwga4afre72tj.png" alt="Your Profile Picture" />

          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
