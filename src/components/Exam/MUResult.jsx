import React from 'react';
import './Exam.css';

const MUResult = () => {
  return (
    <div className="exam-page">
      <h1>MU Result</h1>
      <div className="semester-select">
        <select defaultValue="">
          <option value="" disabled>Select Semester</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
          <option value="3">Semester 3</option>
          <option value="4">Semester 4</option>
          <option value="5">Semester 5</option>
        </select>
        <button className="view-result">View Result</button>
      </div>
    </div>
  );
};

export default MUResult;