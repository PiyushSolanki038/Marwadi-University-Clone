import React from 'react';
import './Exam.css';

const ExamRules = () => {
  return (
    <div className="exam-page">
      <h1>Examination Rules</h1>
      <div className="rules-content">
        <div className="rule-section">
          <h2>General Instructions</h2>
          <ul>
            <li>Carry your Hall Ticket and ID Card</li>
            <li>Reach examination center 30 minutes before exam</li>
            <li>No electronic devices allowed</li>
            <li>Follow dress code guidelines</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExamRules;