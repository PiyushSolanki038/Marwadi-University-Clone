import React from 'react';
import './Notices.css';

const Notices = () => {
  const notices = [
    {
      id: 1,
      date: '28 Mar 2025',
      title: 'Mid Semester Examination Schedule',
      category: 'Examination',
      description: 'Mid semester examination schedule for all departments has been released.',
      link: '#'
    },
    {
      id: 2,
      date: '27 Mar 2025',
      title: 'Fee Payment Last Date',
      category: 'Administrative',
      description: 'Last date for semester fee payment is approaching.',
      link: '#'
    },
    {
      id: 3,
      date: '26 Mar 2025',
      title: 'Workshop on AI/ML',
      category: 'Academic',
      description: 'Two-day workshop on Artificial Intelligence and Machine Learning.',
      link: '#'
    }
  ];

  return (
    <div className="notices-container">
      <h1>Notices & Announcements</h1>
      
      <div className="notices-filters">
        <select defaultValue="all">
          <option value="all">All Categories</option>
          <option value="examination">Examination</option>
          <option value="academic">Academic</option>
          <option value="administrative">Administrative</option>
        </select>
      </div>

      <div className="notices-list">
        {notices.map(notice => (
          <div key={notice.id} className="notice-card">
            <div className="notice-date">
              <span>{notice.date}</span>
            </div>
            <div className="notice-content">
              <span className="notice-category">{notice.category}</span>
              <h3>{notice.title}</h3>
              <p>{notice.description}</p>
              <a href={notice.link} className="notice-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;