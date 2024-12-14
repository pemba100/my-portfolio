import React from "react";
import "../pages/About.css";
import pembaa from "../image/pembaa.JPG";
    import { FaFacebook } from "react-icons/fa";
    import { FaInstagram } from "react-icons/fa";
    import { FaWhatsapp } from "react-icons/fa";


function About() {
  return (
    <div className="container py-5">
    <div className="mid-pic d-flex justify-content-center align-items-center pt-5">
      <img src={pembaa} alt="Pemba's photo" className="img-fluid rounded-circle" />
    </div>
    <h2 className="text-center mt-5 mb-4">
      <u>Pemba Norbu Sherpa</u>
    </h2>
    <div className="text mt-4">
      <p className=" text-center pt-5">
        Hi, I'm Pemba Sherpa, a passionate React developer with a deep
        interest in building dynamic and responsive web applications. I
        specialize in creating seamless user experiences using modern web
        technologies like React, JavaScript, HTML, and CSS. With a strong
        foundation in front-end development, I take pride in writing clean,
        efficient code that delivers high performance across different
        devices. My goal is to continually learn and stay updated with the
        latest trends and tools in the React ecosystem. I love the challenge
        of turning complex problems into simple, elegant solutions. I am always focused on creating the best possible
        experience for users. Feel free to explore my portfolio and get in
        touch for collaborations or freelance opportunities. Feel free to get in touch with me on
      </p>
      
         <p className="text-center">  
         <a href="https://www.facebook.com/profile.php?id=100045760576430" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="social-icon" />
</a>

         <FaInstagram className="socail-icon"/> 
         <FaWhatsapp className="socail-icon"/></p>
  
   
    </div>
  </div>
  
  );
}

export default About;
