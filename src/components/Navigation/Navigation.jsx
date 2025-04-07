import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [showExamMenu, setShowExamMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="main-nav">
      <ul>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={isActive('/academic') ? 'active' : ''}>
          <Link to="/academic">Academic</Link>
        </li>
        <li className={isActive('/notices') ? 'active' : ''}>
          <Link to="/notices">Notices</Link>
        </li>
        <li className={`exam-menu ${isActive('/exam') ? 'active' : ''}`}
            onMouseEnter={() => setShowExamMenu(true)} 
            onMouseLeave={() => setShowExamMenu(false)}>
          <Link to="/exam">Exam</Link>
          {showExamMenu && (
            <div className="exam-dropdown">
              <Link to="/exam/upcoming" className="dropdown-item">Up-Coming Exam / Hall Ticket</Link>
              <Link to="/exam/internal" className="dropdown-item">MID - Internal Result</Link>
              <Link to="/exam/result" className="dropdown-item">MU Result</Link>
              <Link to="/exam/rules" className="dropdown-item">Examination Rules</Link>
              <Link to="/exam/test" className="dropdown-item">Class Test</Link>
              <Link to="/exam/papers" className="dropdown-item">Previous Year Question Paper</Link>
            </div>
          )}
        </li>
        <li className={isActive('/timetable') ? 'active' : ''}>
          <Link to="/timetable">Time Table</Link>
        </li>
        <li className={isActive('/econtent') ? 'active' : ''}>
          <Link to="/econtent">E-Content</Link>
        </li>
        <li className={isActive('/fees') ? 'active' : ''}>
          <Link to="/fees">Fees</Link>
        </li>
        <li className={isActive('/placements') ? 'active' : ''}>
          <Link to="/placements">Placements</Link>
        </li>
        <li className={isActive('/library') ? 'active' : ''}>
          <Link to="/library">Library</Link>
        </li>
        <li className={isActive('/international') ? 'active' : ''}>
          <Link to="/international">International Opportunities</Link>
        </li>
        <li className="more-menu"
            onMouseEnter={() => setShowMoreMenu(true)}
            onMouseLeave={() => setShowMoreMenu(false)}>
          <span>More +</span>
          {showMoreMenu && (
            <div className="more-dropdown">
              <Link to="/campus-life" className="dropdown-item">Campus Life</Link>
              <Link to="/research" className="dropdown-item">Research</Link>
              <Link to="/alumni" className="dropdown-item">Alumni</Link>
              <Link to="/contact" className="dropdown-item">Contact Us</Link>
              <Link to="/about" className="dropdown-item">About Us</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;