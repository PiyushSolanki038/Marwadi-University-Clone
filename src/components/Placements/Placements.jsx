import React from 'react';
import './Placements.css';

const Placements = () => {
  const placementStats = {
    totalOffers: 2500,
    highestPackage: '42.5 LPA',
    averagePackage: '8.2 LPA',
    topRecruiters: ['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys']
  };

  const upcomingDrives = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      date: '15 April 2025',
      position: 'Software Developer',
      package: '12 LPA',
      eligibility: 'B.Tech CSE/IT with 7.5+ CGPA'
    },
    {
      id: 2,
      company: 'Global Systems',
      date: '18 April 2025',
      position: 'System Analyst',
      package: '8 LPA',
      eligibility: 'All Engineering Branches with 7.0+ CGPA'
    }
  ];

  return (
    <div className="placements-container">
      <header className="placements-header">
        <h1>Campus Placements</h1>
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Offers</h3>
            <p>{placementStats.totalOffers}+</p>
          </div>
          <div className="stat-card">
            <h3>Highest Package</h3>
            <p>{placementStats.highestPackage}</p>
          </div>
          <div className="stat-card">
            <h3>Average Package</h3>
            <p>{placementStats.averagePackage}</p>
          </div>
        </div>
      </header>

      <section className="upcoming-drives">
        <h2>Upcoming Placement Drives</h2>
        <div className="drives-list">
          {upcomingDrives.map(drive => (
            <div key={drive.id} className="drive-card">
              <div className="drive-header">
                <h3>{drive.company}</h3>
                <span className="drive-date">{drive.date}</span>
              </div>
              <div className="drive-details">
                <p><strong>Position:</strong> {drive.position}</p>
                <p><strong>Package:</strong> {drive.package}</p>
                <p><strong>Eligibility:</strong> {drive.eligibility}</p>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="top-recruiters">
        <h2>Top Recruiters</h2>
        <div className="recruiters-grid">
          {placementStats.topRecruiters.map((recruiter, index) => (
            <div key={index} className="recruiter-card">
              {recruiter}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Placements;