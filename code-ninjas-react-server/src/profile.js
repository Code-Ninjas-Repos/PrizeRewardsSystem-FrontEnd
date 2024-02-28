import React, { useState } from 'react';
import './styles.css';
import './profile.css';
import starIcon from './images/ninjaStar.png';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    stars: 5,
    reason: 'Finished his summer project',
    newTag: '',
    removeTag: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    switch (formType) {
      case 'search':
        // Implement search functionality
        break;
      case 'update':
        // Implement update functionality
        break;
      case 'addTag':
        // Implement add tag functionality
        break;
      case 'removeTag':
        // Implement remove tag functionality
        break;
      default:
      // Handle other cases
    }
  };

  return (
    <div className="home-container">
      <h1 className="custom-font-admin center-text">Ninja Profile</h1>
      <div className="admin-container">
        <div className="forms-container">
          <div className="upper-forms-container">
            <form className="profile-form full-width-form" onSubmit={(e) => handleSubmit(e, 'search')}>
              <div className="form-group">
                <div className="profile-header">
                  <img src={starIcon} alt="Star" className="star-icon" />
                  <span className="star-count">{profileData.stars} Stars</span>
                </div>
                <label htmlFor="name">Ninja Name:</label>
                <input type="text" id="name" name="name" value={profileData.name} onChange={handleChange} required />
                <button type="submit" className="submit-button">Search Ninja</button>
              </div>
            </form>
            <div className="student-info-section">
              <h2>Student Information</h2>
              <p><strong>First Name:</strong> {profileData.fname}</p>
              <p><strong>Last Name:</strong> {profileData.lname}</p>
              <p><strong>Date of Birth:</strong> {profileData.dob}</p>
              <p><strong>Parent's Phone:</strong> {profileData.parentPhone}</p>
              <p><strong>NFC Tag ID:</strong> {profileData.newTag || profileData.removeTag}</p>
            </div>
          </div>
          <div className="lower-forms-container">
            <form className="profile-form lower-form" onSubmit={(e) => handleSubmit(e, 'update')}>
              <div className="form-group">
                <label htmlFor="stars">Update Stars:</label>
                <input type="number" id="stars" name="stars" value={profileData.stars} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="reason">Reason for Update:</label>
                <textarea
                  id="reason"
                  name="reason"
                  value={profileData.reason}
                  onChange={handleChange}
                  required
                  rows="4" 
                  className="textarea-reason"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Update Profile</button>
            </form>
            <div className="nfc-management lower-form">
              <h2 className="nfc-header">NFC Tag Management</h2>
              <form className="nfc-form" onSubmit={(e) => handleSubmit(e, 'addTag')}>
                <div className="form-group">
                  <label htmlFor="newTag">Add New NFC Tag:</label>
                  <input type="text" id="newTag" name="newTag" placeholder="Enter new NFC tag ID" onChange={handleChange} required />
                  <button type="submit" className="nfc-submit-button">Add Tag</button>
                </div>
              </form>
              <form className="nfc-form" onSubmit={(e) => handleSubmit(e, 'removeTag')}>
                <div className="form-group">
                  <label htmlFor="removeTag">Remove Existing NFC Tag:</label>
                  <input type="text" id="removeTag" name="removeTag" placeholder="Enter NFC tag ID to remove" onChange={handleChange} required />
                  <button type="submit" className="nfc-submit-button">Remove Tag</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
