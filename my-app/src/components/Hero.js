 import React from 'react';
import Typewriter from "typewriter-effect";
import './Hero.css';
import image1 from './images/github.png';
import image2 from './images/li.png';
import image3 from './images/gmail.png';
import arrow from './images/arrow.png';



const Hero = () => {
  const scrollToWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="greeting">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              
             <Typewriter
                   options={{
                   strings: ["Tendulkar", "a Full-Stack Developer"],
                   autoStart: true,
                   loop: true,
                   deleteSpeed: 50,
                   delay: 90,
                    }} />  
          
          </h1>

         
          <p className="role">
            I'm a <span className="highlight-green">Full-Stack Developer</span> specializing in <span className="highlight-purple">Modern Web Applications</span>
          </p>
          <p className="description">
            I build scalable and user-friendly web applications using Java, Spring Boot, React, and MySQL. Passionate about writing clean, efficient code, solving real-world problems, and creating seamless digital experiences.
          </p>
          <div className="hero-actions">
            <button className="cta-button" onClick={scrollToWork}>
              View My Work
              <i className="fas fa-arrow-down"></i>
            </button>
            <div className="social-links">
              <a href="https://github.com/tendulmst" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
                <img src={image1}  className="img1" alt="Descriptive text" width="20" onClick={() => window.open("https://github.com/tendulmst")} />

              <a href="https://www.linkedin./in/tendulkar-m-5789162a3" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
               <img src={image2}  className="img2" alt="Descriptive text" width="20" onClick={() => window.open("https://www.linkedin.com/in/tendulkar-m-5789162a3")} />

              <a href=" https://mail.google.com/mail/?view=cm&fs=1&to=tendulkarm2000@gmail.com" target="_blank"
rel="noopener noreferrer" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
               <img src={image3}  className="img3" alt="Email" width="20" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=tendulkarm2000@gmail.com")} />
               <div>
               <img src={arrow}  className="arr" alt="Descriptive text" width="20" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
