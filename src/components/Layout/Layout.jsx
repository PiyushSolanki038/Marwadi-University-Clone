import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showExamMenu, setShowExamMenu] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <img src="/marwadi-logo.png" alt="Marwadi University" className="mu-logo" />
          <img src="/naac-logo.png" alt="NAAC A+" className="naac-logo" />
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="E-Content Search" />
            <i className="fas fa-search"></i>
          </div>
          <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <img src="/profile-pic.jpg" alt="Profile" />
            <span>PIYUSH SOLANKI</span>
            <i className="fas fa-chevron-down"></i>
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="dropdown-item">Important Contacts</div>
                <div className="dropdown-item">Profile</div>
                <div className="dropdown-item">Student Survey</div>
                <div className="dropdown-item">Change Password</div>
                <div className="dropdown-item">Change Student Information</div>
                <div className="dropdown-item">Technical Details</div>
                <div className="dropdown-item" onClick={handleLogout}>Log Out</div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="hero-banner">
        <img src="/banner-image.jpg" alt="" className="banner-image" />
        <div className="banner-strip">
          Keep your moral high in case of defeat and be more polite on being victorious.
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/academic">Academic</Link></li>
          <li><Link to="/notices">Notices</Link></li>
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

      <Outlet />
    </div>
  );
};

export default Layout;