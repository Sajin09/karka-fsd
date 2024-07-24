import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navbars.css';

const Navbars = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [progress, setProgress] = useState(0);

  const updateProgressBar = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / documentHeight) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateProgressBar);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div>
      <div className='Nav1' style={{ position: 'fixed', top: 0, width: '100%' }}>
        <Nav justified pills>
          <NavItem>
            <NavLink
              className={`aaa ${activeTab === '1' ? 'active' : ''}`}
              href="#home"
              onClick={() => toggle('1')}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`aaa ${activeTab === '2' ? 'active' : ''}`}
              href="#education"
              onClick={() => toggle('2')}
            >
              Educational Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`aaa ${activeTab === '3' ? 'active' : ''}`}
              href="#technology"
              onClick={() => toggle('3')}
            >
              Technology I Learnt
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`aaa ${activeTab === '4' ? 'active' : ''}`}
              href="#projects"
              onClick={() => toggle('4')}
            >
              Project Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`aaa ${activeTab === '5' ? 'active' : ''}`}
              href="#contact"
              onClick={() => toggle('5')}
            >
              Contact
            </NavLink>
          </NavItem>
        </Nav>
        <div style={{ border: '2px solid black' }}>
          <div className="progress">
            <div
              className="progress-bar"
              id="scrollProgressBar"
              style={{ width: `${progress}%` }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
