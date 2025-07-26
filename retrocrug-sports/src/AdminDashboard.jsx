import React, { useState } from 'react';
import './AdminDashboard.css';

export const Sidebar = ({ sidebarCollapsed, toggleSidebar, activeMenu, handleMenuClick }) => {
  const menuItems = [
    { id: 'Dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
    { id: 'Order', icon: 'fa-shopping-cart', label: 'Order' },
    { id: 'Customers', icon: 'fa-user-friends', label: 'Customers' },
    { id: 'Product', icon: 'fa-box', label: 'Product' }
  ];

  return (
    <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fas fa-${sidebarCollapsed ? 'chevron-right' : 'chevron-left'}`}></i>
        </button>
      </div>
      
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.id)}
          >
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="user-dropdown" style={{ marginLeft: 'auto' }}>
        <button className="dropdown-btn">
          <div className="user-avatar">
            <i className="fas fa-user"></i>
          </div>
          <span>Admin User</span>
          <i className="fas fa-chevron-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Dashboard');

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
        {/* Stats Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon revenue-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="stat-value">$81,000</div>
            <div className="stat-label">Total Revenue</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon customer-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-value">5,000</div>
            <div className="stat-label">Total Customers</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon order-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="stat-value">2,311</div>
            <div className="stat-label">Total Orders</div>
          </div>
        </div>
        
        {/* Products Section */}
        <div className="products-section">
          <div className="section-header">
            <h2 className="section-title">Popular Products</h2>
            <a href="#" className="view-all">View All <i className="fas fa-arrow-right"></i></a>
          </div>
          
          <table className="products-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>ID</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-name">
                  <img src="https://via.placeholder.com/40" alt="Product" />
                  Kanky Kitadakate(Green)
                </td>
                <td>021231</td>
                <td>$2500</td>
                <td>2311</td>
                <td><span className="status in-stock">In Stock</span></td>
              </tr>
              <tr>
                <td className="product-name">
                  <img src="https://via.placeholder.com/40" alt="Product" />
                  Rugby Shoes
                </td>
                <td>4000</td>
                <td>$2111</td>
                <td>1661</td>
                <td><span className="status in-stock">In Stock</span></td>
              </tr>
              <tr>
                <td className="product-name">
                  <img src="https://via.placeholder.com/40" alt="Product" />
                  SS bat
                </td>
                <td>10000</td>
                <td>$1661</td>
                <td>2500</td>
                <td><span className="status low-stock">Low Stock</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
