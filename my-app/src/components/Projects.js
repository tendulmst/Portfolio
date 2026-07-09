import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Expense Tracker',
    desc:   'An expense tracker is a tool that helps individuals or businesses monitor and manage their financial transactions, allowing them to track income, expenses, and overall financial health.',
    image: 'https://media.istockphoto.com/id/1255527277/photo/communication-network-concept-iot-telecommunication.jpg?s=2048x2048&w=is&k=20&c=pgxxgSEWXsdPbXWs6daIUM5V2tqaDy9rs1HtR_l4uso=',
    tags: [ 'Spring Boot','MySQL','HTML','CSS' ],
    live: '#'
  },
  {
    title: 'Movie Recommendation System',
    desc: ' A movie recommendation system is a platform that suggests movies to users based on their preferences and viewing history.',
    image: 'https://www.taste.io/_next/image?url=%2Fimages%2Fhero.jpg&w=3840&q=75',
    tags: ['Python', 'Django','HTML','CSS'],
    live: '#'
  } 
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <span className='anchor-offset'></span>
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              <div className="project-media">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-content">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <a className="live-btn" href={p.live} target="_blank" rel="noreferrer">
        
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

 