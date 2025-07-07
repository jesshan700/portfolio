import React from 'react';

const Navbar: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navBar">
      <div className="nav-left">
        <a href="#top" className="header-link" onClick={scrollToTop}>jessica han</a>
        <div className="nav-links">
          <a href="#top" className="nav-sub" onClick={scrollToTop}>home</a>
          <a
            href="https://drive.google.com/file/d/1J2vWe5rMy8PFLNOBGXd27rJ1cJdpkbNa/view?usp=sharing"
            className="nav-sub"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 