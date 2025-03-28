import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css';
import profilePic from '../../assets/Screenshot 2025-03-28 000945.png';

const Dashboard = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showExamMenu, setShowExamMenu] = useState(false);
  const [showTimeTableMenu, setShowTimeTableMenu] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleTimeTableClick = (path) => {
    navigate(path);
    setShowTimeTableMenu(false);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        
        
        
        <div className="header-left">
          <img src={process.env.PUBLIC_URL + '/Screenshot 2025-03-28 001746.png'} alt="Marwadi University" className="mu-logo" />
          <img src={process.env.PUBLIC_URL + '/Screenshot 2025-03-28 001624.png'} alt="NAAC A+" className="naac-logo" />
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="E-Content Search" />
            <i className="fas fa-search"></i>
          </div>
          
          <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <img src={profilePic} alt="Profile" />
            <span>YUG MEHTA</span>
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
        <img src={process.env.PUBLIC_URL + '/222_marwadi-rajkot.jpg'} alt="Marwadi University Campus" className="banner-image" />
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
            Exam
            {showExamMenu && (
              <div className="exam-dropdown">
                <div className="dropdown-item">Up-Coming Exam / Hall Ticket</div>
                <div className="dropdown-item">MID - Internal Result</div>
                <div className="dropdown-item">MU Result</div>
                <div className="dropdown-item">Examination Rules</div>
                <div className="dropdown-item">Class Test</div>
                <div className="dropdown-item">Previous Year Question Paper</div>
              </div>
            )}
          </li>
          
          <li className="timetable-menu"
              onMouseEnter={() => setShowTimeTableMenu(true)}
              onMouseLeave={() => setShowTimeTableMenu(false)}>
            Time Table
            {showTimeTableMenu && (
              <div className="timetable-dropdown">
                <div className="dropdown-item" onClick={() => handleTimeTableClick('/current-week-timetable')}>
                  Current Week Time-Table
                </div>
                <div className="dropdown-item" onClick={() => handleTimeTableClick('/date-wise-timetable')}>
                  Date Wise Time Table
                </div>
                <div className="dropdown-item" onClick={() => handleTimeTableClick('/online-class')}>
                  Online Class
                </div>
              </div>
            )}
          </li>
          <li><Link to="/econtent">E-Content</Link></li>
         
          <li><Link to="/fees">Fees</Link></li>
          <li>Placements</li>
          <li>Library</li>
          <li>International Opportunities</li>
          <li>More +</li>
        </ul>
      </nav>

      <main className="dashboard-content">
        <section className="shortcuts-section">
          <h2>Important Shortcuts</h2>
          <div className="shortcuts-grid">
            <Link to="/subjects" className="shortcut-card">
              <i className="fas fa-book"></i>
              <span>Your Subjects</span>
            </Link>
            <Link to="/registration" className="shortcut-card">
              <i className="fas fa-edit"></i>
              <span>Semester/Subject Registration</span>
            </Link>
            <Link to="/transportation" className="shortcut-card">
              <i className="fas fa-bus"></i>
              <span>Transportation</span>
            </Link>
          </div>
        </section>

        <div className="dashboard-grid">
          <section className="bus-registration">
            <h2>BUS REGISTRATION</h2>
            <p>...related to Transportation Fees</p>
            <button>FOR REGISTRATION CLICK HERE</button>
          </section>

          <section className="current-activity">
            <h3>Current Activity</h3>
            <div className="activity-list">
              {/* Rest of the activity content remains the same */}
            </div>
          </section>
        </div>

        <div className="bottom-sections">
          <section className="notices-section">
            <h3>Notices</h3>
            {/* Notices content */}
          </section>

          <section className="new-uploads">
            <h3>New Uploads</h3>
            <div className="uploads-list">
              <div className="upload-item">
                <div className="upload-date">
                  <span>24</span>
                  <span>Mar 2025</span>
                </div>
                <div className="upload-content">
                  <span>COMPUTER NETWORK</span>
                  <span>Unit-4 (Half Part)</span>
                </div>
                <div className="download-icon">
                  <i className="fas fa-download"></i>
                </div>
              </div>
            </div>
            <button className="view-more">VIEW MORE</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;