import React, { useState } from 'react';
import '../style/Customer.css';
import { Sidebar, Topbar } from './AdminDashboard';

const Customer = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Customers');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const customers = [
    {
      id: '12452',
      name: 'ayush hal shrestha',
      contact: 'ayush@examp.com +9779876543210',
      address: '44800 jagati.bhaktapur'
    },
    {
      id: '12451',
      name: 'hanish shrestha',
      contact: 'hanish@examp.com +9779812345678',
      address: '44600 sallaghari.kathmandu'
    },
    {
      id: '12453',
      name: 'krish khatri',
      contact: 'krish@examp.com +9779805643219',
      address: '44811 thimi.bhaktapur'
    },
    {
      id: '12453',
      name: 'aishworya tamang',
      contact: 'tamang@examp.com +977987678787',
      address: '33700 jagati.pokhara'
    },
    {
      id: '12452',
      name: 'sadikshya gurung',
      contact: 'sadik@examp.com +9779008776687',
      address: 'jagati.pokharatucky 39495'
    },
    {
      id: '12451',
      name: 'Leslie pradhan',
      contact: 'leslie@examp.com +9779865456778',
      address: '33700 jagati.pokhara'
    },
    {
      id: '12345',
      name: 'Kristin joshi',
      contact: 'kristin@examp.com +977988877667',
      address: '44600 darbarmarg.kathmandu'
    },
    {
      id: '12451',
      name: 'bishwo maharjan',
      contact: 'bishwo@examp.com +9779565647890',
      address: '44600 baneshwor.kathmandu'
    }
  ];

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
        <div className="customer-section">
          <h2>Customer</h2>
          <div className="search-bar-container">
            <input type="text" placeholder="Search for id, name Customer" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className="add-customer-btn">
            Add Customer <i className="fas fa-plus"></i>
          </button>
          <table className="customers-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Name Customer</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="customer-name-id">
                      <a href="#" style={{ color: '#d9534f', fontWeight: '600', textDecoration: 'none' }}>
                        ID{customer.id}
                      </a>
                      <div>{customer.name}</div>
                    </div>
                  </td>
                  <td>{customer.contact}</td>
                  <td>{customer.address}</td>
                  <td className="action-buttons">
                    <button title="View"><i className="fas fa-eye"></i></button>
                    <button title="Edit"><i className="fas fa-edit"></i></button>
                    <button title="Delete"><i className="fas fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
