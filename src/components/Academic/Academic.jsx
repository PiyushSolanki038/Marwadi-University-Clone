import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Academic.css';

const Academic = () => {
  const [selectedSemester, setSelectedSemester] = useState('Sem 4');
  
  const subjects = [
    {
      code: 'CPI ( 01CE0408 )',
      name: 'CREATIVITY, PROBLEM SOLVING',
      chapter: 'Chapter',
      weeklyLec: 'MO',
      syllabus: '83.3%'
    },
    {
      code: 'DM ( 01CE0409 )',
      name: 'DISCRETE MATHEMATICS',
      chapter: '5. Rules of Inference for pre...',
      weeklyLec: 'MO-TU-TH-FR',
      syllabus: '4.35%'
    },
    {
      code: 'CN ( 01CE0410 )',
      name: 'COMPUTER NETWORK',
      chapter: 'Chapter',
      weeklyLec: 'TU-WE-TH-FR',
      syllabus: '0.00%'
    },
    {
      code: 'AWT ( 01CE0412 )',
      name: 'ADVANCED WEB TECHNOLOGY',
      chapter: 'Chapter',
      weeklyLec: 'MO-TU-WE-TH',
      syllabus: '98.2%'
    },
    {
      code: 'OS ( 01CE1401 )',
      name: 'OPERATING SYSTEM',
      chapter: '2. Modes of Transfer, Priority ...',
      weeklyLec: 'MO-TU-WE-TH-FR',
      syllabus: '39.2%'
    },
    {
      code: 'COA ( 01CE1402 )',
      name: 'COMPUTER ORGANIZATION AND ARCHITECTURE',
      chapter: 'Chapter',
      weeklyLec: 'MO-WE-TH-FR',
      syllabus: '24.3%'
    }
  ];

  const assignments = [
    {
      title: 'Programming Test-1',
      date: '18/03/2025',
      image: '/profile-pic.jpg'
    },
    {
      title: 'Unit 5 PPT - COA',
      date: '27 Mar 2025',
      image: '/profile-pic.jpg'
    },
    {
      title: 'Unit 5 PDF - COA',
      date: '27 Mar 2025',
      image: '/profile-pic.jpg'
    },
    {
      title: 'Unit 4 PDF - COA',
      date: '27 Mar 2025',
      image: '/profile-pic.jpg'
    }
  ];

  return (
    <div className="academic-container">
      <div className="profile-header">
        <div className="profile-info">
          <img src="/profile-pic.jpg" alt="Profile" />
          <div>
            <h2>YUG MEHTA</h2>
            <p>CE</p>
          </div>
        </div>
        <div className="assignment-stats">
          <div className="stat-item">
            <span className="number">1</span>
            <span className="label">Total Assignment</span>
          </div>
          <div className="stat-item">
            <span className="number">1</span>
            <span className="label">Assignment Submitted</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="subjects-section">
          <h3>📚 Subjects</h3>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div key={index} className="subject-card">
                <div className="subject-header">
                  <span className="subject-code">{subject.code}</span>
                </div>
                <p className="subject-name">{subject.name}</p>
                <div className="subject-details">
                  <div>
                    <label>Chapter</label>
                    <p>{subject.chapter}</p>
                  </div>
                  <div>
                    <label>Weekly Lec.</label>
                    <p>{subject.weeklyLec}</p>
                  </div>
                  <div>
                    <label>Syllabus</label>
                    <p>{subject.syllabus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="assignments-section">
          <h3>📝 Assignments</h3>
          <div className="assignments-list">
            {assignments.map((assignment, index) => (
              <div key={index} className="assignment-card">
                <div className="assignment-info">
                  <img src={assignment.image} alt={assignment.title} />
                  <div>
                    <h4>{assignment.title}</h4>
                    <p>{assignment.date}</p>
                  </div>
                </div>
                <button className="view-btn">👁️</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;