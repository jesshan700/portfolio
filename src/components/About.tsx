import React from 'react';
import './About.css';

const About: React.FC = () => (
  <div className="about-introduction">
    <div className="about-description">
      <h2>welcome to my page :)</h2>
      <p>
        I'm Jessica, a senior year at Cornell University on track for an
        Information Science, Systems, and Technology major with a
        concentration in Interactive Technologies. When I first came into
        college, I was pursuing a Computer Science degree but instead fell in
        love with the aspect of design and front end development.
        <br />
        <br />
        In my free time, you can find me creating my own art, mainly with
        watercolor, playing volleyball on the Arts Quad, or searching around
        the web for easy recipes to try.
      </p>
    </div>
    <div className="about-image">
      <img src="/Images/jessica.JPG" alt="jessica-picture" />
    </div>
  </div>
);

export default About; 