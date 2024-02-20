import React from 'react';
import './styles.css';
import './adminHome.css';
import welcomeImage from './images/welcome.jpg';

const AdminHome = () => {
  return (
    <div className="home-container">
      <h1 className="custom-font-admin center-text">Admin Dashboard</h1>
      <div className="admin-container">
        <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        <div className="welcome-message">
          <h2>Welcome, Admin!</h2>
          <p>Choose what you'd like to do next:</p>
        </div>
        <div className="action-items">
          <button className="action-button">N/A</button>
          <button className="action-button">Manage Profile</button>
          <button className="action-button">Create An Account</button>
        </div>
        <div className="inspirational-quote">
          <p>"The secret of getting ahead is getting started." - Mark Twain</p>
        </div>
      </div>
    </div>
  );
};


export default AdminHome;
