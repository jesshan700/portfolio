import React from 'react';
import { ReactComponent as ReVentLogo } from './images/reVent.svg';

interface ProjectItem {
  name: string;
  date: string;
  description: string;
  image: React.ReactElement;
  link: string;
  technologies: string[];
}

const projects: ProjectItem[] = [
  {
    name: 'reVent',
    date: 'December 2022',
    description: 'Designed and developed reVent, a website that allows you to create and edit blog posts. Used Figma, React with Typescript and Firebase.',
    image: <ReVentLogo className="project-svg" />,
    link: 'https://github.coecis.cornell.edu/jh2228/blog-app',
    technologies: ['React', 'Typescript', 'Firebase']
  }
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="main-projects">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="image-link">
            {project.image}
          </a>
          <div className="project-descript">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${project.name.toLowerCase()}-sub`}>
              {project.name}
            </a>
            <br />
            <p className="project-date">{project.date}</p>
            <p className="project-summary">
              {project.description}
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ color: '#a3ccfc' }}>
                  {' '}{tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects; 