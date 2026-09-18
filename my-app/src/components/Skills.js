import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', percentage: 85, color: '#5b8cff' },
    { name: 'JavaScript', percentage: 50, color: '#5b8cff' },
    { name: 'CSS', percentage: 90, color: '#1dd4bf' },
    { name: 'HTML', percentage: 90, color: '#22c55e' }
  ];

  const backendSkills = [
    { name: 'CoreJava', percentage: 85, color: '#22c55e' },
    { name: 'JDBC', percentage: 70, color: '#f6b73f' },
    { name: 'SQL', percentage: 80, color: '#8b5cf6' },
    { name: 'Hibernate', percentage: 60, color: '#22c55e' }
  ];

  const  Tools = [
    { name: 'Github', percentage: 75 },
    { name: 'Vercel', percentage: 60 },
    { name: 'Copilot', percentage: 55 },
    { name: 'Cloud AI', percentage: 30 }
  ];

  const ProgressCard = ({ title, items }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const io = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
      if (ref.current) io.observe(ref.current);
      return () => io.disconnect();
    }, []);

    return (
      <div style={cardStyle} ref={ref}>
        <h3 style={cardTitleStyle}>{title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.map((skill, i) => (
            <div key={i}>
              <div style={labelRowStyle}>
                <span style={labelStyle}>{skill.name}</span>
                <span style={percentStyle}>{visible ? `${skill.percentage}%` : '0%'}</span>
              </div>
              <div style={trackStyle}>
                <div style={{ ...fillStyle, width: visible ? `${skill.percentage}%` : '0%', backgroundColor: skill.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ProfessionalCard = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const io = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
      if (ref.current) io.observe(ref.current);
      return () => io.disconnect();
    }, []);

    return (
      <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h3 style={{ ...cardTitleStyle, fontSize: '18px' }}>Tools & Others</h3>
        <div
          className="skills-grid"
          ref={ref}
          style={{
            gap: '14px',
            maxWidth: '250px',
            margin: '0 auto',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            alignItems: 'center'
          }}
        >
          {Tools.map((skill, index) => (
            <CircularProgress
              key={index}
              percentage={skill.percentage}
              name={skill.name}
              index={index}
              size={92}
              textScale={0.82}
              visible={visible}
            />
          ))}
        </div>
      </div>
    );
  };

  const CircularProgress = ({ percentage, name, index, size = 120, textScale = 1, visible = false }) => {
    const radius = size / 2;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const currentPercent = visible ? percentage : 0;
    const strokeDashoffset = circumference - (currentPercent / 100) * circumference;

    return (
      <div className="circular-skill">
        <div className="circular-progress-container">
          <svg
            height={size}
            width={size}
            className={`circular-progress ${visible ? 'animate-rotate' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <circle
              stroke="#1e293b"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="progress-bg"
            />
            <circle
              stroke="#00d4ff"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className={`progress-fill ${visible ? 'animate-draw' : ''}`}
            />
          </svg>
          <div className="percentage-text" style={{ fontSize: `${1.5 * textScale}rem` }}>{currentPercent}%</div>
        </div>
        <div className="skill-name" style={{ fontSize: `${1.0 * textScale}rem` }}>{name}</div>
      </div>
    );
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
        </div>

        <div style={cardsRowStyle}>
          <ProgressCard title="Frontend" items={frontendSkills} />
          <ProgressCard title="Backend" items={backendSkills} />
          <ProfessionalCard />
        </div>
      </div>
    </section>
  );
};

// Inline styles for card layout
const cardsRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px',
  marginBottom: '20px'
};

const cardStyle = {
  background: 'rgba(15, 23, 42, 0.9)',
  border: '1px solid rgba(255, 255, 255, 0.83)',
  borderRadius: '14px',
  padding: '18px 18px 14px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.22)'
};

const cardTitleStyle = {
  color: '#fff',
  fontSize: '22px',
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: '20px'
};

const labelRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px'
};

const labelStyle = { color: '#e5e7eb', fontSize: '14px' };
const percentStyle = { color: '#9ca3af', fontSize: '12px' };
const trackStyle = {
  width: '100%',
  height: '8px',
  backgroundColor: 'rgba(255,255,255,0.08)',
  borderRadius: '999px',
  overflow: 'hidden'
};
const fillStyle = { height: '100%', borderRadius: '999px', transition: 'width 1s ease-in-out' };

export default Skills;


 