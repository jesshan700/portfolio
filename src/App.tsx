import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

function App() {
  const [showToTop, setShowToTop] = useState(false);
  const [showAboutOnly, setShowAboutOnly] = useState(false);

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

  useEffect(() => {
    const handleHashChange = () => {
      setShowAboutOnly(window.location.hash === '#about');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // set on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <a href="#top" className="to-top" style={{ display: showToTop ? 'block' : 'none' }}>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
      {showAboutOnly ? (
        <div id="about">
          <About />
        </div>
      ) : (
        <>
          <div className="main-description">
            <p>
              Hi, I'm Jessica an aspiring software developer<br />
              and senior at Cornell University.
              <br />
              <br />
              I was previously <i> @Amazon</i> and currently open to entry level
              positions!
              <br />
              <br />
              See what I've been up to!
              <a href="#main-scroll">
                <FontAwesomeIcon icon={faArrowDown} />
              </a>
            </p>
            <div className="description-buttons">
              <a href="#experience" className="btn">Experience</a>
              <a href="#projects" className="btn">Projects</a>
            </div>
          </div>
          <div id="main-scroll">
            <Experience />
            <Projects />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
