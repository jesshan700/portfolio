import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isHiddenNavVisible, setIsHiddenNavVisible] = useState(false);

  const toggleHiddenNav = () => {
    setIsHiddenNavVisible(!isHiddenNavVisible);
  };

  return (
    <>
      <nav className="navBar">
        <a href="/" className="header-link">jessica han</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleHiddenNav}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </a>
        <a href="/" className="nav-sub">home</a>
        <a href="#about" className="nav-sub">about</a>
        <a
          href="https://drive.google.com/file/d/1J2vWe5rMy8PFLNOBGXd27rJ1cJdpkbNa/view?usp=sharing"
          className="nav-sub"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
        <a href="/explore" className="nav-sub">explore</a>
      </nav>

      <nav id="hiddenNavBar" style={{ display: isHiddenNavVisible ? 'block' : 'none' }}>
        <a href="javascript:void(0);" className="x-icon" onClick={toggleHiddenNav}>
          <FontAwesomeIcon icon={faXmark} />
        </a>
        <a href="/" className="nav-hid">home</a>
        <a href="#about" className="nav-hid">about</a>
        <a
          href="https://drive.google.com/file/d/159jvarasV8WG7JUTN_7pCCzaIQf91rD1/view?usp=sharing"
          className="nav-hid"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
        <a href="/explore" className="nav-hid">explore</a>
      </nav>
    </>
  );
};

export default Navbar; 