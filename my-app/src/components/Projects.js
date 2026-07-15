import React, { useState } from 'react';
import './Projects.css';
import galleryOne from './images/mov1.png';
import galleryTwo from './images/exp1.png';
import galleryThree from './images/mov2.png';
import galleryFour from './images/mov3.png';
import galleryFive from './images/exp2.png';
import gallerySix from './images/exp3.png';

const projects = [
  {
    title: 'Expense Tracker',
    desc: 'An expense tracker is a tool that helps individuals or businesses monitor and manage their financial transactions, allowing them to track income, expenses, and overall financial health.',
    image: 'https://media.istockphoto.com/id/1255527277/photo/communication-network-concept-iot-telecommunication.jpg?s=2048x2048&w=is&k=20&c=pgxxgSEWXsdPbXWs6daIUM5V2tqaDy9rs1HtR_l4uso=',
    tags: ['Java', 'MySQL', 'HTML', 'CSS'],
    live: '#'
  },
  {
    title: 'Movie Recommendation System',
    desc: 'A movie recommendation system is a platform that suggests movies to users based on their preferences and viewing history.',
    image: 'https://www.taste.io/_next/image?url=%2Fimages%2Fhero.jpg&w=3840&q=75',
    tags: ['Python', 'Django', 'HTML', 'CSS'],
    live: '#'
  }
];

const galleryImages = [
  { src: galleryOne, alt: 'Expense tracker dashboard preview' },
  { src: galleryTwo, alt: 'UI design showcase preview' },
  { src: galleryThree, alt: 'Data analytics interface preview' },
  { src: galleryFour, alt: 'Project detail screen preview' },
  { src: galleryFive, alt: 'Another portfolio preview' },
  { src: gallerySix, alt: 'Frontend layout preview' }
];

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleImages = galleryImages.slice(0, 3);
  const hiddenImages = galleryImages.slice(3);

  return (
    <section className="projects" id="projects">
      <span className="anchor-offset"></span>
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
                  <a className="live-btn" href={p.live} target="_blank" rel="noreferrer"></a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-section">
          <div className="gallery-heading">
            <h3>Project Gallery</h3>
             
          </div>

          <div className="gallery-grid">
            {visibleImages.map((image, index) => (
              <div className="gallery-card" key={`${image.alt}-${index}`}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>

          <div className={`gallery-expandable ${expanded ? 'is-open' : ''}`}>
            <div className="gallery-grid gallery-grid--secondary">
              {hiddenImages.map((image, index) => (
                <div className="gallery-card" key={`${image.alt}-${index}`}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="gallery-toggle"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

 