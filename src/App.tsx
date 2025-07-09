import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Experience from './components/Experience';
import Projects from './components/Projects';
import jessicaImage from './components/images/jessica.jpeg';
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
      <a href="#top" className="to-top" style={{ display: showToTop ? 'block' : 'none' }}>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
      
      <div className="split-layout">
        {/* Left Section - Static About/Profile */}
        <div className="left-section">
          <div className="profile-content">
            <div className="profile-text">
              <h1>Jessica Han</h1>
              <p>
                Previously <i>@Amazon</i> and currently open to entry level
                positions!
              </p>
              <div className="table-of-contents">
                <ul>
                  <li><a href="#intro" className="toc-link">INTRODUCTION</a></li>
                  <li><a href="#experience" className="toc-link">EXPERIENCE</a></li>
                  <li><a href="#projects" className="toc-link">PROJECTS</a></li>
                  <li><a 
                    href="https://drive.google.com/file/d/1wVS1j-ZLSoUIuAhZxRnWZu6XkTc2K9s0/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="toc-link"
                  >VIEW RESUME</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/jesshan700" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/jessica-han-78b4b3220/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:jesshan70@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="right-section">
          {/* Introduction */}
          <div id="intro" className="intro-section">
            <div className="section-header"><span>/ INTRODUCTION</span><div className="section-header-line"></div></div>
            <div className="intro-content">
              <img src={jessicaImage} alt="Jessica Han" className="intro-profile-image" />
              <p>
              I’m Jessica, a recent graduate from Cornell University with a degree 
              in Information Science, Systems, and Technology and a concentration in 
              Interactive Technologies. I’m passionate about building software that’s 
              both thoughtful in design and strong in performance - whether that’s through
                <strong> user-focused web interfaces</strong>, backend systems, databases, or AI applications.
              <br /><br />
              I’ve gained experience across various environments, from big tech at <strong>Amazon</strong> to 
              devOps at <strong>SWIFT</strong>, and I enjoy working on products that require both creativity 
              and technical rigor.
              <br /><br />
              Outside of work, I love painting with watercolor, playing volleyball, and trying 
              out new recipes. I'm currently seeking a <strong>full-time software engineering</strong> role where I 
              can keep learning, contribute to impactful products, and grow across the full stack
               - from backend to frontend to AI.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="content-section">
            <div className="section-header"><span>/ EXPERIENCE</span><div className="section-header-line"></div></div>
            <Experience />
          </div>

          {/* Projects Section */}
          <div id="projects" className="content-section">
            <div className="section-header"><span>/ PROJECTS</span><div className="section-header-line"></div></div>
            <Projects />
          </div>

          {/* Footer */}
          <div className="footer-section">
            <p className="footer-text">built and designed by jessica han</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
