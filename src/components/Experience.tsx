import React from 'react';
import { ReactComponent as AmazonLogo } from './images/amazon.svg';
import { ReactComponent as SwiftLogo } from './images/swiftImage.svg';
import { ReactComponent as AlesigLogo } from './images/alesig.svg';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  image: React.ReactElement;
  link: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Amazon',
    role: 'Amazon Intern',
    period: 'Software Development, Summer 2024',
    description: 'Subscribe & Save Customer Experience Team; Redesigned system architecture for Subscribe and Save Webpage, enabling dynamic widget placement to improve customer experience.',
    image: <AmazonLogo />,
    link: 'https://www.amazon.com/fmc/everyday-essentials-sns',
    highlights: ['Subscribe and Save Webpage', 'AWS DynamoDB', 'query tools', 'data analysis tools']
  },
  {
    company: 'Swift',
    role: 'Swift Intern',
    period: 'DevOps, Summer 2023',
    description: 'Collaboration and Management Squad; retrieved Bitbucket respository and project branch permissions, and pull request setting by querying BitbucketAPI and used Groovy JSON objects to parse information.',
    image: <SwiftLogo />,
    link: 'https://www.swift.com/',
    highlights: ['BitbucketAPI', 'Groovy JSON']
  },
  {
    company: 'Alesig',
    role: 'Alesig Intern',
    period: 'Interactive Technologies, Summer 2022',
    description: 'Worked primarily with AWS during internship at Alesig. Migrated website from on-prem server to EC2 instances.',
    image: <AlesigLogo />,
    link: 'https://alesig.com/',
    highlights: []
  }
];

const Experience: React.FC = () => {
  return (
    <div id="experience" className="section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="main-projects">
          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="image-link">
            {exp.image}
          </a>
          <div className="project-descript">
            <a href={exp.link} target="_blank" rel="noopener noreferrer" className={`${exp.company.toLowerCase()}-sub`}>
              {exp.role}
            </a>
            <br />
            <p className="project-date">{exp.period}</p>
            <p className="project-summary">
              {exp.description}
              {exp.highlights.map((highlight, i) => (
                <span key={i} style={{ color: exp.company === 'Amazon' ? '#ffb35b' : exp.company === 'Swift' ? '#98ded9' : '#a3ccfc' }}>
                  {' '}{highlight}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience; 