import React, { useState } from 'react';
import '../style/AdminProduct.css';

const AdminProduct = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Product');
  const [activeTab, setActiveTab] = useState('Cricket');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const menuItems = [
    { id: 'Dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
    { id: 'Order', icon: 'fa-shopping-cart', label: 'Order' },
    { id: 'Customers', icon: 'fa-user-friends', label: 'Customers' },
    { id: 'Product', icon: 'fa-box', label: 'Product' }
  ];

  const products = [
    {
      id: '021231',
      productName: 'Kookaburra Bat',
      productImage: 'https://via.placeholder.com/40?text=Bat',
      price: 30000,
      qty: 234,
      date: '04/17/23 at 8:25 PM',
      status: 'Available'
    },
    {
      id: '021232',
      productName: 'Kookaburra Ball',
      productImage: 'https://via.placeholder.com/40?text=Ball',
      price: 1500,
      qty: 80,
      date: '04/17/23 at 8:25 PM',
      status: 'Out of Stock'
    },
    {
      id: '021233',
      productName: 'SS Bat',
      productImage: 'https://via.placeholder.com/40?text=Bat',
      price: 10000,
      qty: 50,
      date: '04/17/23 at 8:25 PM',
      status: 'Available'
    },
    {
      id: '021234',
      productName: 'GM shoes',
      productImage: 'https://via.placeholder.com/40?text=Shoes',
      price: 6000,
      qty: 70,
      date: '04/17/23 at 8:25 PM',
      status: 'Out of Stock'
    }
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        {/* Top Bar */}
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

        {/* Product Section */}
        <div className="product-section">
          <h2>Product</h2>

          {/* Search Bar */}
          <div className="search-bar-container">
            <input type="text" placeholder="Search for id, name product" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Tabs */}
          <div className="tabs">
            {['Cricket', 'Football', 'Rugby', 'Tennis'].map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Products Table */}
          <table className="products-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Product</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td className="product-name">
                    <img src={product.productImage} alt={product.productName} />
                    <div>
                      <a href="#" style={{ color: '#d9534f', fontWeight: '600', textDecoration: 'none' }}>{product.id}</a>
                      <div>{product.productName}</div>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.qty}</td>
                  <td>{product.date}</td>
                  <td>
                    <span className={`status ${product.status.replace(/\s/g, '')}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="action-buttons">
                    <button title="View"><i className="fas fa-eye"></i></button>
                    <button title="Edit"><i className="fas fa-edit"></i></button>
                    <button title="Delete"><i className="fas fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="new-product-btn">
            New Product <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
