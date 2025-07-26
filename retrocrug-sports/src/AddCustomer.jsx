import React, { useState } from 'react';
import './AddCustomer.css';
import { Sidebar, Topbar } from './AdminDashboard';

const AddCustomer = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Customers');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <div className="dashboard">
      <Sidebar 
        sidebarCollapsed={sidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
        activeMenu={activeMenu} 
        handleMenuClick={handleMenuClick} 
      />
      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
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
