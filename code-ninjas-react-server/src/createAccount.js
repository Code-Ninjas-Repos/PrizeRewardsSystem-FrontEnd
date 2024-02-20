import React from 'react';
import './styles.css';
import './createAccount.css'

const CreateAccount = () => {
  return (
    <div className="home-container">
      <h1 className="custom-font-admin center-text">Create Account Page</h1>
      <div className="admin-container">
        <div className="create-account-container"> 
          <form className="create-account-form" action="#" method="post">
            <div className="form-group">
              <div className="name-inputs">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" placeholder="Enter student's first name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Enter student's last name" required />
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
