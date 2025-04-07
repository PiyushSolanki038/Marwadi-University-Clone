import React from 'react';
import './Exam.css';

const InternalResult = () => {
  return (
    <div className="exam-page">
      <h1>MID - Internal Result</h1>
      <div className="result-table">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Mid Term 1</th>
              <th>Mid Term 2</th>
              <th>Assignment</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Computer Networks</td>
              <td>18/20</td>
              <td>17/20</td>
              <td>9/10</td>
              <td>44/50</td>
            </tr>
            {/* Add more subjects */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternalResult;