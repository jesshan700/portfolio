import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  link: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    period: 'MAY 2024 - AUG 2024',
    description: 'Subscribe & Save Customer Experience Team; Redesigned system architecture for Subscribe and Save Webpage, enabling dynamic widget placement to improve customer experience.',
    link: 'https://www.amazon.com/fmc/everyday-essentials-sns',
    highlights: ['AWS','Java','DynamoDB', 'Internal query tools', 'Internal data analysis']
  },
  {
    company: 'Cornell Digital Tech & Innovation Project Team',
    role: 'Full Stack Developer',
    period: 'FEB 2023 - AUG 2024',
    description: 'Collaborated with designers, developers, and PMs on the CUApts sub-team to design and build a web application for Cornell students to search for off-campus housing; customized and optimized review card components from Figma designs, resolved query issues, and implemented a search box to enhance user experience.',
    link: 'https://www.cornelldti.org/',
    highlights: ['Typescript', 'JavaScript', 'React.js', 'Figma', 'Google Firebase']
  },
  {
    company: 'Cornell University',
    role: 'Teaching Assistant for INFO 2300',
    period: 'JAN 2024 - MAY 2024',
    description: 'Teaching Assistant for a server-side web development course covering HTTP handling, dynamic rendering, SQL database integration, and secure session management using PHP; provided technical support during weekly office hours and evaluated project-based assignments.',
    link: 'https://classes.cornell.edu/browse/roster/SP24/class/INFO/2300',
    highlights: ['PHP', 'SQL', 'HTML', 'CSS', 'JavaScript']
  },
  {
    company: 'Swift',
    role: 'DevOps Intern',
    period: 'JUN 2023 - AUG 2023',
    description: 'Collaboration and Management Squad; retrieved Bitbucket respository and project branch permissions, and pull request setting by querying BitbucketAPI and used Groovy JSON objects to parse information.',
    link: 'https://www.swift.com/',
    highlights: ['Python','BitbucketAPI', 'Groovy']
  },
  {
    company: 'Alesig',
    role: 'Information Technology Intern',
    period: 'JUN 2022 - AUG 2022',
    description: 'Worked primarily with AWS during internship at Alesig. Migrated website from on-prem server to EC2 instances.',
    link: 'https://alesig.com/',
    highlights: ['AWS', 'EC2']
  }
];

const Experience: React.FC = () => {
  return (
    <div id="experience" className="section">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-date">{exp.period}</div>
          <div className="experience-content">
            <div className="experience-header">
              <span className="company-name">{exp.company}</span>
              <span className="role-title"><i>{exp.role}</i></span>
            </div>
            <p className="experience-description">
              {exp.description}
            </p>
            {exp.highlights.length > 0 && (
              <div className="highlights-container">
                {exp.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-button">
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience; 