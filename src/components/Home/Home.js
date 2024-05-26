import {TypeAnimation } from "react-type-animation"
import React from "react";
const Home  =  () =>{
return (
    <div className="Home">
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
)}

export default Home;
