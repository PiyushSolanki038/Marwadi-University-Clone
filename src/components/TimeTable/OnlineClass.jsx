import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TimeTable.css';

const OnlineClass = () => {
  const [viewType, setViewType] = useState('dateWise');

  return (
    <div className="timetable-container">
      <div className="shortcuts-section">
        <h2>Important Shortcuts</h2>
        <div className="shortcuts-grid">
          <div className="shortcut-card">
            <img src="/book-icon.png" alt="Your Subjects" />
            <span>Your Subjects</span>
          </div>
          <div className="shortcut-card">
            <img src="/edit-icon.png" alt="Registration" />
            <span>Semester/Subject Registration</span>
          </div>
          <div className="shortcut-card">
            <img src="/bus-icon.png" alt="Transportation" />
            <span>Transportation</span>
          </div>
        </div>
      </div>

      <div className="breadcrumb">
        <Link to="/dashboard">Dashboard</Link> / Online Class
      </div>

      <div className="online-class-content">
        <h2>Online Class</h2>
        
        <div className="view-selector">
          <label>
            <input 
              type="radio" 
              name="viewType" 
              value="dateWise"
              checked={viewType === 'dateWise'}
              onChange={(e) => setViewType(e.target.value)}
            />
            Date Wise
          </label>
          <label>
            <input 
              type="radio" 
              name="viewType" 
              value="semesterSubject"
              checked={viewType === 'semesterSubject'}
              onChange={(e) => setViewType(e.target.value)}
            />
            Semester Subject Wise
          </label>
        </div>

        <div className="date-selector">
          <label>Select Date: </label>
          <input type="date" />
          <button className="view-btn">VIEW</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineClass;