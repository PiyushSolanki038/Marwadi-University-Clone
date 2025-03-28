import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Fees.css';  // Verify this import is at the top of your Fees component

const Fees = () => {
  const [activeTab, setActiveTab] = useState('pending');

  return (
    <div className="fees-container">
      <div className="breadcrumb">
        <Link to="/dashboard">Dashboard</Link> / Fees / {activeTab === 'pending' ? 'Fees Pending' : 'Print Receipt'}
      </div>

      <div className="fees-options">
        <label className="radio-label">
          <input 
            type="radio" 
            name="feeType" 
            checked={activeTab === 'pending'}
            onChange={() => setActiveTab('pending')}
          />
          <span>Fees Pending</span>
        </label>
        <label className="radio-label">
          <input 
            type="radio" 
            name="feeType" 
            checked={activeTab === 'receipt'}
            onChange={() => setActiveTab('receipt')}
          />
          <span>Fees/Print Receipt</span>
        </label>
      </div>

      <div className="fees-content">
        <h2>Pending Fees Payment</h2>
        <table className="fees-table">
          <thead>
            <tr>
              <th>Academic Year</th>
              <th>Semester</th>
              <th>Fee Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your fee data here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fees;