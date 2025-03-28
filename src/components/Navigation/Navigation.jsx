import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [showExamMenu, setShowExamMenu] = useState(false);
  const location = useLocation();

  return (
    <nav className="main-nav">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === '/academic' ? 'active' : ''}>
          <Link to="/academic">Academic</Link>
        </li>
        <li className={location.pathname === '/notices' ? 'active' : ''}>
          <Link to="/notices">Notices</Link>
        </li>
        <li className="exam-menu" 
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
        <li><Link to="/timetable">Time Table</Link></li>
        <li><Link to="/econtent">E-Content</Link></li>
        <li><Link to="/fees">Fees</Link></li>
        <li><Link to="/placements">Placements</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/international">International Opportunities</Link></li>
        <li>More +</li>
      </ul>
    </nav>
  );
};

export default Navigation;