import React from 'react';
import './Exam.css';

const ClassTest = () => {
  return (
    <div className="exam-page">
      <h1>Class Test</h1>
      <div className="test-schedule">
        <div className="test-card">
          <h3>Upcoming Tests</h3>
          <div className="test-item">
            <p>Computer Networks - Unit 4</p>
            <p>Date: April 1, 2025</p>
            <p>Time: 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassTest;