import React, { useState } from 'react';
import './AdminOrder.css'; 

const AdminOrder = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Order');
  const [activeTab, setActiveTab] = useState('All Orders');

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

  const orders = [
    {
      id: '021231',
      productName: 'SS cricket bat',
      productImage: 'https://via.placeholder.com/40?text=Bat',
      customer: 'Leslie Alexander',
      price: 10000,
      date: '04/17/23',
      status: 'Shipping'
    },
    {
      id: '021231',
      productName: 'Mr yod football',
      productImage: 'https://via.placeholder.com/40?text=Ball',
      customer: 'Leslie Alexander',
      price: 650,
      date: '04/17/23',
      status: 'Cancelled'
    },
    {
      id: '021231',
      productName: 'Kanky Kitadakate (Green)',
      productImage: 'https://via.placeholder.com/40?text=Green',
      customer: 'Leslie Alexander',
      price: 2400,
      date: '04/17/23',
      status: 'Shipping'
    },
    {
      id: '021231',
      productName: 'Story Honzo (Cream)',
      productImage: 'https://via.placeholder.com/40?text=Cream',
      customer: 'Leslie Alexander',
      price: 3000,
      date: '04/17/23',
      status: 'Shipping'
    },
    {
      id: '021231',
      productName: 'Kookaburra ball',
      productImage: 'https://via.placeholder.com/40?text=Ball',
      customer: 'Leslie Alexander',
      price: 1200,
      date: '04/17/23',
      status: 'Cancelled'
    },
    {
      id: '021231',
      productName: 'GM shoes',
      productImage: 'https://via.placeholder.com/40?text=Shoes',
      customer: 'Leslie Alexander',
      price: 6000,
      date: '04/17/23',
      status: 'Shipping'
    },
    {
      id: '021231',
      productName: 'Beige Coffe (Navy)',
      productImage: 'https://via.placeholder.com/40?text=Navy',
      customer: 'Leslie Alexander',
      price: 2200,
      date: '04/17/23',
      status: 'Cancelled'
    },
    {
      id: '021231',
      productName: 'Wilson Racket',
      productImage: 'https://via.placeholder.com/40?text=Racket',
      customer: 'Leslie Alexander',
      price: 7000,
      date: '04/17/23',
      status: 'Cancelled'
    }
  ];

  const statusColors = {
    Shipping: 'bg-purple-200 text-purple-700',
    Cancelled: 'bg-red-200 text-red-700',
    Completed: 'bg-green-200 text-green-700'
  };

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

        {/* Orders Section */}
        <div className="orders-section" style={{ backgroundColor: '#54548B', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', color: 'white' }}>
          <h2 style={{ marginBottom: '20px' }}>Orders</h2>

          {/* Search Bar */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search for iid, name product"
              style={{
                width: '100%',
                padding: '10px 15px',
                borderRadius: '20px',
                border: 'none',
                outline: 'none',
                fontSize: '1rem'
              }}
            />
            <button style={{ position: 'relative', left: '-35px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', backgroundColor: '#f8f9fa', borderRadius: '20px', color: '#54548B' }}>
            {['All Orders (441)', 'Shipping (100)', 'Completed (300)', 'Cancel (41)'].map((tab) => (
              <div
                key={tab}
                onClick={() => handleTabClick(tab)}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '10px 0',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  backgroundColor: activeTab === tab ? '#2E227B' : 'transparent',
                  color: activeTab === tab ? 'white' : '#54548B',
                  border: '1px solid #2E227B',
                  userSelect: 'none'
                }}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Orders Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#212529' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th><input type="checkbox" /></th>
                <th>Orders</th>
                <th>Customer</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td><input type="checkbox" /></td>
                  <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={order.productImage} alt={order.productName} style={{ width: '40px', height: '40px', borderRadius: '5px' }} />
                    <div>
                      <a href="#" style={{ color: '#2E227B', fontWeight: '600', textDecoration: 'none' }}>{order.id}</a>
                      <div>{order.productName}</div>
                    </div>
                  </td>
                  <td>{order.customer}</td>
                  <td>{order.price}</td>
                  <td>{order.date}</td>
                  <td>
                    <span style={{
                      padding: '5px 10px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      backgroundColor: order.status === 'Shipping' ? '#d6c9f9' : '#f9d6d6',
                      color: order.status === 'Shipping' ? '#6a4ed6' : '#d66a6a'
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button title="View" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <i className="fas fa-eye"></i>
                    </button>
                    <button title="Edit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <i className="fas fa-edit"></i>
                    </button>
                    <button title="Delete" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <i className="fas fa-trash"></i>
                    </button>
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

export default AdminOrder;
