import React from 'react';
import { ReactComponent as ReVentLogo } from './images/reVent.svg';
import { ReactComponent as MbtiLogo } from './images/mbti.svg';

interface ProjectItem {
  name: string;
  description: string;
  image: React.ReactElement;
  link: string;
  technologies: string[];
}

const projects: ProjectItem[] = [
  {
    name: 'MBTI Personality Visualization Platform',
    description: 'Developed an interactive web app that analyzes MBTI personality types, visualizes global distributions, and provides personalized team compatibility insights based on user input.',
    image: <MbtiLogo className="project-svg mbti-logo" />,
    link: 'https://github.com/estherhan202/info4310-final-project',
    technologies: ['D3.js', 'JavaScript','GeoJSON', 'CSS3']
  },
  {
    name: 'reVent',
    description: 'Designed and developed reVent, a website that allows you to create and edit blog posts. Used Figma, React with Typescript and Firebase.',
    image: <ReVentLogo className="project-svg revent-logo" />,
    link: 'https://github.com/jesshan700/blog-app',
    technologies: ['React', 'Typescript', 'Firebase']
  }
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-card"
          >
            <div className="project-image">
              {project.image}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects; 