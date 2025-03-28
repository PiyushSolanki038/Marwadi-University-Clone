import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EContent.css';

const EContent = () => {
  const [selectedTab, setSelectedTab] = useState('labManual');

  const contentData = [
    {
      title: "COMPUTER NETWORK LectureHandout_Unit_01",
      date: "24-01-2024",
      time: "10:45:12.0 AM",
      size: "2.5 MB"
    }
  ];

  return (
    <div className="econtent-container">
      <div className="shortcuts-section">
        <h2>Important Shortcuts</h2>
        <div className="shortcuts-grid">
          <div className="shortcut-card">
            <img src="/book-icon.png" alt="Subjects" />
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
        <Link to="/dashboard">Dashboard</Link> / E-Content (Download)
      </div>

      <div className="econtent-section">
        <h3>E-Content (Download)</h3>
        
        <div className="filter-tabs">
          <button className="tab-active">Lab Manual</button>
          <button>Subject</button>
          <button>Other Study Materials</button>
        </div>

        <div className="search-box">
          <div className="search-left">
            <input type="text" placeholder="Search Files" />
            <button className="search-btn">Search</button>
            <button className="reset-btn">Reset</button>
          </div>
          <div className="search-right">
            <select>
              <option value="">--SELECT--</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
            <button className="submit-btn">Submit</button>
          </div>
        </div>

        <div className="files-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>COMPUTER NETWORK LectureHandout_Unit_01</td>
                <td className="action-icons">
                  <i className="fas fa-eye"></i>
                  <i className="fas fa-download"></i>
                  <i className="fas fa-share-alt"></i>
                  <i className="fas fa-print"></i>
                  <span>2.5 MB</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EContent;