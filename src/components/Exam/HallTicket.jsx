import React from 'react';
import './Exam.css';

const HallTicket = () => {
  return (
    <div className="exam-page">
      <h1>Upcoming Exam / Hall Ticket</h1>
      <div className="exam-content">
        <div className="exam-card">
          <h2>Current Semester Exams</h2>
          <div className="exam-details">
            <p>Semester: 6</p>
            <p>Exam Type: Regular</p>
            <p>Status: Upcoming</p>
            <button className="download-btn">Download Hall Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallTicket;