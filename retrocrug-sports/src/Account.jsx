import React from 'react';
import './Account.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ProfileEdit = () => {
  return (
    <div>
        <Navbar />
    <div className="profile-container">
      <div className="profile-left">
        <img
          src="/profile-icon.png"
          alt="Profile Icon"
          className="profile-image"
        />
      </div>

      <div className="profile-right">
        <h2>Edit Your Profile</h2>

        <form className="profile-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Address" />
          </div>

          <p className="password-label">Password Changes</p>
          <div className="form-row">
            <input type="password" placeholder="Current Password" />
          </div>
          <div className="form-row">
            <input type="password" placeholder="New Password" />
          </div>
          <div className="form-row">
            <input type="password" placeholder="Confirm New Password" />
          </div>

          <div className="form-buttons">
            <button className="cancel-btn" type="button">Cancel</button>
            <button className="save-btn" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProfileEdit;
