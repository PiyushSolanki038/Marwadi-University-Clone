import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TimeTable.css';

const DateWiseTimeTable = () => {
  const [selectedDate, setSelectedDate] = useState('');

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
        <Link to="/dashboard">Dashboard</Link> / Date Wise Time Table
      </div>

      <div className="timetable-content">
        <h2>Date Wise Time Table</h2>
        
        <div className="date-selector">
          <label>Select Date: </label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
          <button className="view-btn">VIEW</button>
        </div>

        <div className="timetable">
          {/* Add your timetable content here */}
        </div>
      </div>
    </div>
  );
};

export default DateWiseTimeTable;