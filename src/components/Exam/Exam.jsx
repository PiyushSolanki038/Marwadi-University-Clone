import React from 'react';
import { Link } from 'react-router-dom';
import './Exam.css';

const Exam = () => {
  const examData = [
    {
      subject: "CPI",
      code: "01CE0408",
      date: "8/4/2024",
      time: "10:30 AM to 12:00 PM",
      location: "Block-A",
      exam: "MID SEMESTER TEST PHASE-II"
    },
    {
      subject: "DM",
      code: "01CE0409",
      date: "8/4/2024",
      time: "10:30 AM to 12:00 PM",
      location: "Block-A",
      exam: "MID SEMESTER TEST PHASE-II"
    },
    {
      subject: "CN",
      code: "01CE0410",
      date: "9/4/2024",
      time: "10:30 AM to 12:00 PM",
      location: "Block-A",
      exam: "MID SEMESTER TEST PHASE-II"
    },
    {
      subject: "AWT",
      code: "01CE0412",
      date: "9/4/2024",
      time: "10:30 AM to 12:00 PM",
      location: "Block-A",
      exam: "MU FINAL EXAM"
    }
  ];

  return (
    <div className="exam-container">
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
        <Link to="/dashboard">Dashboard</Link> / Up-Coming Examination
      </div>

      <div className="exam-content">
        <h2>Up-Coming Examination</h2>
        
        <div className="exam-table-container">
          <table className="exam-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date & Time</th>
                <th>Location</th>
                <th>Exam</th>
              </tr>
            </thead>
            <tbody>
              {examData.map((exam, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                  <td>
                    <strong>{exam.subject}</strong><br />
                    <span className="subject-code">{exam.code}</span>
                  </td>
                  <td>
                    <strong>{exam.date}</strong><br />
                    <span className="exam-time">{exam.time}</span>
                  </td>
                  <td>{exam.location}</td>
                  <td>{exam.exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="hall-ticket-section">
          <h3>Your Hall Ticket</h3>
          <div className="hall-ticket-info">
            {/* Add hall ticket information here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;