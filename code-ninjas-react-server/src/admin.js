import React from 'react';
import './admin.css';
import './styles.css'
import logoImage from './images/logo.png'

const Admin = () => {
  return (
    <div className="home-container">
      <h1 className="custom-font-admin center-text">Admin Portal</h1>
      <div className="admin-container">
        <div className="login-panel">
          <div className="logo-container">
            <img src={logoImage} alt="Admin Logo" className="logo" />
          </div>
          <h1 className="login-title">Admin Portal</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;