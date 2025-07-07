import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <a href="#top" className="to-top" style={{ display: showToTop ? 'block' : 'none' }}>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
      
      {/* Hero Section - Merged with About */}
      <div className="main-description" id="top">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Jessica</h1>
            <p>
              I was previously <i>@Amazon</i> and currently open to entry level
              positions!
              <br />
              <br />
              In my free time, you can find me creating my own art, mainly with
              watercolor, playing volleyball on the Arts Quad, or searching around
              the web for easy recipes to try.
              <br />
              <br />
              See what I've been up to!
              <a href="#experience">
                <FontAwesomeIcon icon={faArrowDown} />
              </a>
            </p>
            <div className="description-buttons">
              <a href="#experience" className="btn">Experience</a>
              <a href="#projects" className="btn">Projects</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/Images/jessica.JPG" alt="jessica-picture" />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="section">
        <Experience />
      </div>

      {/* Projects Section */}
      <div id="projects" className="section">
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

export default App;
