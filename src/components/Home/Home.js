import React from 'react';
import './Home.css';
import {TypeAnimation} from 'react-type-animation'; // Assuming correct import syntax


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
      <div className='text-container-2'>
        <h2 className='about'>About</h2>
        <p>
        I. Introduction: Aspiring Tech Enthusiast
I'm currently a pre-final year undergraduate student, passionately pursuing a Bachelor of Technology (B.Tech) degree in Computer Science Engineering (CSE). My journey into this field began with a deep fascination for technology and its potential to solve problems and shape the future. As I delve deeper into the world of algorithms, data structures, and software development, my enthusiasm continues to grow.

II. A B.Tech Journey: Learning and Building
The B.Tech CSE curriculum has been instrumental in providing me with a strong foundation in the core principles of computer science. I've gained a comprehensive understanding of programming languages like C, C++, Java, and Python, along with the ability to design and analyze algorithms. Courses on computer architecture, operating systems, databases, and web development have further broadened my knowledge and equipped me with the skills to build robust software systems.

Beyond the classroom, I've actively participated in coding competitions and hackathons. These experiences have challenged me to think critically, apply theoretical knowledge to practical problems, and collaborate effectively with other programmers. Working on personal projects has also been a rewarding way to hone my skills, experiment with new technologies, and explore different areas of computer science that interest me.

III. Skillset and Interests
Programming Languages: C, C++, Python, Java, JavaScript (basic)
Development Tools: IDEs (Integrated Development Environments) like Visual Studio Code, PyCharm, and command-line tools (Git, version control)
Web Development: Familiarity with HTML, CSS, and basic understanding of front-end frameworks (e.g., React)
Areas of Interest: Artificial Intelligence (AI), Machine Learning (ML), Web Development

My passion lies in exploring the frontiers of computer science, particularly in the realms of AI and Machine Learning. I'm fascinated by the potential of these technologies to revolutionize various industries and fields. My goal is to further develop my skills in these areas and contribute to the creation of intelligent systems that can benefit society.

IV. Future Aspirations: A Lifelong Learner
As I approach my final year, I'm actively seeking internship opportunities that will allow me to apply my acquired knowledge to real-world projects, gain practical experience in a professional setting, and contribute to a team. I'm also considering pursuing a Master's degree to delve deeper into a specific area of computer science that aligns with my interests.
        </p>
        <h2>Skills</h2>
            <ul className="skills-list">
              <li>Programming Languages: C, C++, Kotlin, Python</li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Frameworks: React, Angular</li>
              <li>Operating Systems: Linux (Fidora), Windows</li>
              <li>IDEs: Android Studio, Visual Studio Code, PyCharm, IntelliJ IDEA (and more)</li>
            </ul>
      </div>
      
    </div>
  );
}

export default Home;
