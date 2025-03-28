import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(username, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          <p>Please login with your Username & Password</p>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" 
            className="login-input"
            required
          />
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            className="login-input"
            required
          />
          <button type="submit" className="login-button">LOGIN</button>
          <a href="#" className="forgot-password">I Forgot Password</a>
        </form>
      </div>
      <div className="accreditation-content">
        <h1>ACCREDITED & ACCOMPLISHED!</h1>
        <p>A step closer to excellence,</p>
        <p>A step ahead in the brighter future!</p>
        <div className="accreditation-info">
          <p>WE TAKE PRIDE IN BECOMING ONE OF THE TWO UNIVERSITIES IN GUJARAT WITH</p>
          <h2>NBA-ACCREDITED MBA PROGRAM</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;