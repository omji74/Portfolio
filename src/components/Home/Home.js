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
                `Welcome to My Portfolio!`,
                1000,
                `I'm a Web Developer & Android Dev`,
                1000,
                `& a Competitive Programmer.`,
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
        <img src="https://cdn.hackernoon.com/images/person-studing-the-cosmos-e7k88hfewrqwwga4afre72tj.png" alt="Your Profile Picture" />

          </div>
          <div className="about-section">
            <h2>About</h2>
            <p>
              I. Introduction: Aspiring Tech Enthusiast
              <br />
              I'm currently a pre-final year undergraduate student, passionately pursuing a Bachelor of Technology (B.Tech) degree in Computer Science Engineering (CSE). My journey into this field began with a deep fascination for technology and its potential to solve problems and shape the future. As I delve deeper into the world of algorithms, data structures, and software development, my enthusiasm continues to grow.

              
            
              <br />
              The B.Tech CSE curriculum has been instrumental in providing me with a strong foundation in the core principles of computer science. I've gained a comprehensive understanding of programming languages like C, C++, Java, and Python, along with the ability to design and analyze algorithms. Courses on computer architecture, operating systems, databases, and web development have further broadened my knowledge and equipped me with the skills to build robust software systems.

              <br />
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
              <br />
              As I approach my final year, I'm actively seeking internship opportunities that will allow me to apply my acquired knowledge to real-world projects, gain practical experience in a professional setting, and contribute to a team. I'm also considering pursuing a Master's degree to delve deeper into a specific area of computer science that aligns with my interests.
            </p>
            </div>
        </section>
     
      </main>
     
      
    </div>
  );
}

export default Home;
