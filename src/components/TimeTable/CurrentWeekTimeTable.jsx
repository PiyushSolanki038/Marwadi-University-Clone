import React from 'react';
import { Link } from 'react-router-dom';
import './TimeTable.css';

const CurrentWeekTimeTable = () => {
  const weeklySchedule = [
    {
      day: 'Monday',
      classes: [
        { time: '9:30-11:00', subject: 'AWT', location: 'EC-1 (T-TEC1)', faculty: 'SRK' },
        { time: '11:00-12:30', subject: 'CN', location: 'EC-1 (B+TEC1)', faculty: 'CSM' },
        { time: '1:30-3:00', subject: 'OS', location: 'EC-1 (B+TEC1)', faculty: 'PFM' }
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '9:30-11:00', subject: 'DM', location: 'EC-1 (T-TEC1)', faculty: 'RKP' },
        { time: '11:00-12:30', subject: 'CPI', location: 'EC-1 (B+TEC1)', faculty: 'JDP' }
      ]
    },
    // Add more days as needed
  ];

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
        <Link to="/dashboard">Dashboard</Link> / Current Week Time-Table
      </div>

      <div className="weekly-timetable">
        <h2>Current Week Time-Table</h2>
        
        {weeklySchedule.map((day, index) => (
          <div key={index} className="day-schedule">
            <h3>{day.day}</h3>
            <div className="schedule-grid">
              {day.classes.map((classItem, classIndex) => (
                <div key={classIndex} className="class-card">
                  <div className="time-slot">{classItem.time}</div>
                  <div className="class-details">
                    <h4>{classItem.subject}</h4>
                    <p>{classItem.location}</p>
                    <p>Faculty: {classItem.faculty}</p>
                  </div>
                  <div className="class-actions">
                    <button className="status-btn success">✓</button>
                    <button className="status-btn warning">!</button>
                    <button className="status-btn info">i</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentWeekTimeTable;