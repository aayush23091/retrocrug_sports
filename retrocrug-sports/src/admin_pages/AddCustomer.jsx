import React from 'react';
import '../style/AddCustomer.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AddCustomer = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="add-customer-container">
          <h2>Customer</h2>
          <form className="customer-form">
            <div className="form-group">
              <label>Name Customer</label>
              <input type="text" placeholder="Input name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Input email" />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input type="text" placeholder="Contact" />
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Membership status</label>
                <input type="text" placeholder="Total Purchases" />
              </div>
              <div className="form-group half">
                <label>Postal code</label>
                <input type="text" placeholder="Order Quantity" />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea placeholder="Input address"></textarea>
            </div>
            <button type="submit" className="save-customer-btn">Save Customer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
