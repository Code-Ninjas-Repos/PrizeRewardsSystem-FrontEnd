import React, { useState } from 'react';
import './styles.css';
import './createAccount.css'

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    dob: '',
    email: '',
    parentPhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation to send formData to database
    console.log(formData);
    alert('Account created successfully!');
    // Reset form or handle post-submission state as needed
  };

  return (
    <div className="home-container">
     <h1 className="custom-font-admin center-text">Create Ninja Account</h1>
      <div className="admin-container">
        <form className="create-account-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">First Name:</label>
            <input type="text" id="fname" name="fname" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Last Name:</label>
            <input type="text" id="lname" name="lname" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email (optional):</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="parentPhone">Parent's Phone Number:</label>
            <input type="tel" id="parentPhone" name="parentPhone" value={formData.parentPhone} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

