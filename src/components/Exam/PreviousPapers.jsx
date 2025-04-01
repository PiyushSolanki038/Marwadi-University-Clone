import React from 'react';
import './Exam.css';

const PreviousPapers = () => {
  return (
    <div className="exam-page">
      <h1>Previous Year Question Papers</h1>
      <div className="papers-grid">
        <div className="paper-card">
          <h3>Computer Networks</h3>
          <p>Year: 2024</p>
          <button className="download-btn">
            <i className="fas fa-download"></i> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousPapers;