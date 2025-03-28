import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TimeTable.css';

const TimeTable = () => {
  const [selectedDate, setSelectedDate] = useState('Mar 27, 2025');
  const [activeClass, setActiveClass] = useState(null);

  const handleView = () => {
    // Add your view logic here
    console.log('Viewing timetable for:', selectedDate);
  };

  const handleStatusClick = (id, status) => {
    switch(status) {
      case 'success':
        alert('Class Completed');
        break;
      case 'warning':
        alert('Class Cancelled');
        break;
      case 'info':
        alert('Class Information');
        break;
      case 'more':
        setActiveClass(activeClass === id ? null : id);
        break;
      default:
        break;
    }
  };

  const timeTableData = [
    {
      id: 1,
      subject: 'AWT',
      time: '9:30-11:00',
      location: 'EC-1 (T-TEC1)',
      faculty: 'SRK-MA205',
      class: 'MA205',
      status: 'Completed'
    },
    {
      id: 2,
      subject: 'CN',
      time: '11:00-12:30',
      location: 'EC-1 (B+TEC1)',
      faculty: 'CSM-MA220',
      class: 'MC220'
    },
    {
      id: 3,
      subject: 'OS',
      time: '11:00-12:30',
      location: 'EC-1 (B+TEC1)',
      faculty: 'PFM-MA205',
      class: 'MA205'
    }
    // Add more data as needed
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
        <Link to="/dashboard">Dashboard</Link> / Date Wise Time Table
      </div>

      <div className="timetable-content">
        <h2>Time Table</h2>
        
        <div className="date-selector">
          <label>Select Date: </label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
          <button className="view-btn" onClick={handleView}>VIEW</button>
        </div>

        <div className="timetable">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Subject</th>
                <th>From - To</th>
                <th>Faculty</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {timeTableData.map((item) => (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>{item.id}</td>
                    <td>
                      {item.subject}
                      <br />
                      <small>{item.location}</small>
                    </td>
                    <td>{item.time}</td>
                    <td>{item.faculty}</td>
                    <td>{item.class}</td>
                    <td className="action-buttons">
                      <button 
                        className="status-btn success"
                        onClick={() => handleStatusClick(item.id, 'success')}
                        title="Mark as Completed"
                      >✓</button>
                      <button 
                        className="status-btn warning"
                        onClick={() => handleStatusClick(item.id, 'warning')}
                        title="Mark as Cancelled"
                      >!</button>
                      <button 
                        className="status-btn info"
                        onClick={() => handleStatusClick(item.id, 'info')}
                        title="View Information"
                      >i</button>
                      <button 
                        className={`status-btn more ${activeClass === item.id ? 'active' : ''}`}
                        onClick={() => handleStatusClick(item.id, 'more')}
                        title="More Options"
                      >⋮</button>
                    </td>
                  </tr>
                  {activeClass === item.id && (
                    <tr className="more-options">
                      <td colSpan="6">
                        <div className="options-menu">
                          <button>View Details</button>
                          <button>Download Material</button>
                          <button>Join Online Class</button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;