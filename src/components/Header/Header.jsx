import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { logout } = useAuth();

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <img src="https://via.placeholder.com/150x50?text=Marwadi+Logo" alt="Marwadi University" className="mu-logo" />
        <img src="https://via.placeholder.com/40x40?text=A+" alt="NAAC A+" className="naac-logo" />
      </div>
      <div className="header-right">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="notification-icon">
          <i className="fas fa-bell"></i>
        </div>
        <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          <img src="https://via.placeholder.com/40x40" alt="Profile" />
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
              <div className="dropdown-item" onClick={logout}>Log Out</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;