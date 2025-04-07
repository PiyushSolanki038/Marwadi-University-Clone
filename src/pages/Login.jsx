import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('userInfo', JSON.stringify(data));
        window.location.href = '/';
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (error) {
      setError('Server error. Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>LOGIN</h2>
        <p>Please login with your Username & Password</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          
          <button type="submit" className="login-button">LOGIN</button>
          
          <div className="forgot-password">
            <Link to="/forgot-password">I forgot Password</Link>
          </div>
        </form>
      </div>
      
      <div className="login-banner">
        <div className="banner-content">
          <h2>ACCREDITED & ACCOMPLISHED!</h2>
          <p>A step closer to excellence.</p>
          <p>A step ahead in the brighter future!</p>
          <p>WE TAKE PRIDE IN BECOMING ONE OF THE TWO UNIVERSITIES IN GUJARAT WITH</p>
          <h3>NBA-ACCREDITED MBA PROGRAM</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;