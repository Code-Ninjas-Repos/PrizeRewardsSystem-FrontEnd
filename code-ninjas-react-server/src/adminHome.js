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
          <p>Select a menu option from the drop down in the top left corner!</p>
        </div>
        <div className="inspirational-quote">
          <p>"The secret of getting ahead is getting started." - Mark Twain</p>
        </div>
      </div>
    </div>
  );
};


export default AdminHome;
