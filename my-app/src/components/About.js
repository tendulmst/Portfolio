import React from 'react';
import './About.css';
import pic1 from './images/ui.png'
import pic2 from './images/front.png'
import pic3 from './images/back.png'
import pic4 from './images/data.png'

const About = () => {

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="title-underline">
            <div className="underline-green"></div>
            <div className="underline-blue"></div>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-left">
            <h3 className="about-subtitle">
               <span className='highlight-purple'>I'm</span> Tendulkar
            </h3>
            
            <p className="about-text">
              I'm a passionate Full Stack Developer and B.Tech Information Technology student with a strong interest in building dynamic, user-focused web applications. I enjoy working across both frontend and backend technologies — turning ideas into interactive and efficient digital solutions.

            </p>
            
            <p className="about-text">
              I have hands-on experience with React.js, Node.js, Express, and MongoDB, and I love exploring modern frameworks and tools to create clean, responsive, and scalable applications. Beyond coding, I focus on writing maintainable code, solving real-world problems, and continuously learning emerging technologies.

            </p>

            <p className="about-text">
              I’m currently seeking an opportunity to apply my skills in real-world projects and grow as a developer in a collaborative environment.
            </p>
            
            <div className="skill-tags">
              <span className="skill-tag">Problem Solver</span>
              <span className="skill-tag">Team Player</span>
              <span className="skill-tag">Quick Learner</span>
            </div>
          </div>
          
          <div className="about-right">
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                <img src={pic2}  className="pic1" alt="Descriptive text" width="20" />
                </div>
                <h4 className="value-title">Frontend Development</h4>
                <p className="value-description">
                  Skilled in building responsive and dynamic web apps using React.js and Proficient with Tailwind CSS and modern component libraries
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <img src={pic3}  className="pic1" alt="Descriptive text" width="20" />
                <h4 className="value-title">Backend Development</h4>
                <p className="value-description">
                     I develop scalable and secure backend applications using Java and Spring Boot. I focus on designing RESTful APIs,and building maintainable server-side solutions with clean, efficient code.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                 <img src={pic4}  className="pic1" alt="Descriptive text" width="20" />
                <h4 className="value-title">Database Management</h4>
                <p className="value-description">
                    Experienced in designing and managing MySQL databases, writing optimized SQL queries, implementing CRUD operations, and ensuring data integrity.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-coffee"></i>
                </div>
                 <img src={pic1}  className="pic1" alt="Descriptive text" width="20" />
                <h4 className="value-title">UI/UX Design</h4>
                <p className="value-description">
                 Knowledge of Figma, Canva, and UI principles and Focus on user-friendly and accessible design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
