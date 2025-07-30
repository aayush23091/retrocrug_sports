import React from 'react';
import '../style/AddCustomer.css';
import Sidebar from './Sidebar';
// import Topbar from './Topbar'; // No need to import Topbar here

const AddCustomer = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        {/* Topbar removed from here */}
        {/* Add Customer Form */}
        <div className="add-customer-container">
          <h2>Customer</h2>
          <div className="form-container">
            <label>Name Customer</label>
            <input type="text" placeholder="Input name" />
            <label>Email</label>
            <input type="email" placeholder="Input email" />
            <label>Contact</label>
            <input type="text" placeholder="Contact" />
            <div className="row">
              <div className="col">
                <label>Membership status</label>
                <select>
                  <option>Select status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="col">
                <label>Postal code</label>
                <input type="text" placeholder="Postal code" />
              </div>
            </div>
            <label>Address</label>
            <input type="text" placeholder="Input address" />
            <button className="save-customer-btn">Save Customer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;