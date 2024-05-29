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
            <h1> Hi EveryOne &hearts;</h1>
      
        <TypeAnimation
              sequence={[
                `Welcome to My Portfolio!`,
                1000,
                `I'm a Web Developer & Android Dev`,
                1000,
                `&  Competitive Programmer.`,
                1000,
                '',
              ]}
              speed={50} // Typing speed in milliseconds
              style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
              repeat={Infinity} // Repeat animation indefinitely
            /><h2>Skills</h2>
             
           <div className='skill' style={{display: 'flex'}}>
<table>
  <tr>
   
  <td align="center" width="160">
        <img src="https://skillicons.dev/icons?i=c" width="80" height="80" alt="C" />
        C
    </td>
    <td align="center" width="160">
        <img src="https://skillicons.dev/icons?i=cpp" alt="icon" width="80" height="80" />
        C++
    </td>
    <td align="center" width="160">
        <img src="https://skillicons.dev/icons?i=python" alt="icon" width="80" height="80" />
        Python
    </td>
    <td align="center" width="160">
        <img src="https://skillicons.dev/icons?i=java" alt="icon" width="80" height="80" />
        Java
    </td>
    <td align="center" width="160">
        <img src="https://skillicons.dev/icons?i=kotlin" alt="icon" width="80" height="80" />
        Kotlin
    </td>
    <td align="center" width="160">
    <img src="https://skillicons.dev/icons?i=github" alt="icon" width="80" height="80" />
        Github
    </td>
    <td align="center" width="160">
    <img src="https://skillicons.dev/icons?i=git" alt="icon" width="80" height="80" />
        Git
    </td>
    </tr>
    <tr>
   
   <td align="center"  width="160">
       <img src="https://skillicons.dev/icons?i=html" width="80" height="80" alt="HTML5" />
       HTML5
   </td>
   <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=css" width="80" height="80" alt="css" />
       CSS
   </td>
   <td align="center"  width="160">
       <img src="https://skillicons.dev/icons?i=bootstrap" width="80" height="80" alt="bootstrap" />
       Bootstrap
   </td>
   <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=js" alt="icon" width="80" height="80" />
       JavaScript
   </td>
   <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=tailwind" width="80" height="80" alt="tailwind" />
       Tailwind
   </td>
   <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=jquery" width="80" height="80" alt="jQuery" />
       jQuery
   </td>
   <td align="center" width="160">
        <img src="https://skillicons.dev/icons?i=ts" alt="icon" width="80" height="80" />
        Type Script
    </td>
     
   </tr>
   <tr>
 
   
     <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=mongodb" width="80" height="80" alt="MongoDB" />
       MongoDB
   </td>
     <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=express" width="80" height="80" alt="WordPress" />
       Express
   </td>
   <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=react" alt="icon" width="80" height="80" />
       React
   </td>
   <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=nodejs" width="80" height="80" alt="Nodejs" />
       Nodejs
     </td>
   
     </tr> 
    {/* <tr>
    <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=vscode" width="80" height="80" alt="Nodejs" />
       Vs Code
     </td>
     <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=androidstudio" width="80" height="80" alt="Nodejs" />
       Android Studio
     </td>
     <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=atom" width="80" height="80" alt="Nodejs" />
       Atom
     </td>
     <td align="center" width="160">
       <img src="https://skillicons.dev/icons?i=sublime" width="80" height="80" alt="Nodejs" />
       Sublime
     </td>
    </tr> */}
 
</table>
  <table>
  
 

</table>
</div>


             
           
         
          </div>
          
          
          <div className="image-container">
        <img src="https://i.ibb.co/Kj36D3r/IMG-20231118-214651-removebg-preview.jpg" alt="Your Profile Picture" />

          </div>
          <div className="about-section">
           <a href='/'> <h2>About</h2></a>
            <p>
              I'm a passionate tech enthusiast currently pursuing a BTech in Computer Science and Engineering (3rd year) at NITRA Technical Campus Ghaziabad. Driven by a thirst for knowledge and a desire to make a mark in the ever-evolving tech landscape, I'm constantly seeking opportunities to learn, grow, and contribute.
              {/* I. Introduction: Aspiring Tech Enthusiast
              <br /> */}
              {/* I'm currently a pre-final year undergraduate student, passionately pursuing a Bachelor of Technology (B.Tech) degree in Computer Science Engineering (CSE). My journey into this field began with a deep fascination for technology and its potential to solve problems and shape the future. As I delve deeper into the world of algorithms, data structures, and software development, my enthusiasm continues to grow.

              
            
              <br />
              The B.Tech CSE curriculum has been instrumental in providing me with a strong foundation in the core principles of computer science. I've gained a comprehensive understanding of programming languages like C, C++, Java, and Python, along with the ability to design and analyze algorithms. Courses on computer architecture, operating systems, databases, and web development have further broadened my knowledge and equipped me with the skills to build robust software systems. */}

              {/* <br />
              <br />

              Beyond the classroom, I've actively participated in coding competitions and hackathons. These experiences have challenged me to think critically, apply theoretical knowledge to practical problems, and collaborate effectively with other programmers. Working on personal projects has also been a rewarding way to hone my skills, experiment with new technologies, and explore different areas of computer science that interest me.

              <br />
              <br />

              III. Skillset and Interests
              <br />
              Programming Languages: C, C++, Python, Java, JavaScript (basic)
              <br />
              Development Tools: IDEs (Integrated Development Environments) like Visual Studio Code, PyCharm, and command-line tools (Git, version control)
              <br />
              Web Development: Familiarity with HTML, CSS, and basic understanding of front-end frameworks (e.g., React)
              <br />
              Areas of Interest: Artificial Intelligence (AI), Machine Learning (ML), Web Development

              <br />
              My passion lies in exploring the frontiers of computer science, particularly in the realms of AI and Machine Learning. I'm fascinated by the potential of these technologies to revolutionize various industries and fields. My goal is to further develop my skills in these areas and contribute to the creation of intelligent systems that can benefit society.

              <br />
              <br />

              IV. Future Aspirations: A Lifelong Learner
              <br /> */}
              As I approach my final year, I'm actively seeking internship opportunities that will allow me to apply my acquired knowledge to real-world projects, gain practical experience in a professional setting, and contribute to a team. I'm also considering pursuing a Master's degree to delve deeper into a specific area of computer science that aligns with my interests.
            </p>
            </div>
            <div className="about-section">
          <a href='/'>  <h2>Project</h2></a>
           <div>
           <h4 className='project'>
              <a href='https://feedback-app-seven-beta.vercel.app/'>1. FeedBack App </a>
              
            </h4>
            <p>
              Using CRUD Operation User Can give Feedback it is Totally using Frontend Technology and use React Frame Work to develope it  You can Edit your FeedBack as well , Also calculate average feedback rating and last is not least user can delete feedback,and read about more please check my <a href='https://github.com/omji74/FEEDBACK_APP'> GitHub Repo 
              </a>
            </p>
           </div>
           <div>
           <h4 className='project'>
              <a href='https://yelp-camp-lovat.vercel.app/campgrounds'>1. Bloging App </a>
              
            </h4>
            <p>
            Created a web application using the MERN stack (MongoDB, Express.js,
React.js, Node.js)
- Implemented user authentication and authorization features.
- Utilized MongoDB to store and manage Campgrounds data. <a href='https://github.com/omji74/Yelp_Camp'> GitHub Repo 
              </a>
            </p>
           </div>
            </div>
        </section>
     
      </main>
     
      
    </div>
  );
}

export default Home;
