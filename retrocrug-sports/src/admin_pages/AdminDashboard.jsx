
// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../style/AdminDashboard.css';
// import { AuthContext } from '../context/AuthContext.jsx';

// const AdminDashboard = () => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [activeMenu, setActiveMenu] = useState('Dashboard');

//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const toggleSidebar = () => {
//     setSidebarCollapsed(!sidebarCollapsed);
//   };

//   const handleMenuClick = (menuItem) => {
//     setActiveMenu(menuItem);
//   };

//   const handleLogout = () => {
//     logout(); // clear context and localStorage
//     navigate('/login'); // redirect to login page
//   };

//   return (
//     <div className="dashboard" style={{ backgroundColor: 'white' }}>
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
//         <div className="sidebar-header">
//           <h3>Admin Panel</h3>
//           <button className="toggle-btn" onClick={toggleSidebar}>
//             <i className={`fas fa-${sidebarCollapsed ? 'chevron-right' : 'chevron-left'}`}></i>
//           </button>
//         </div>

//         <div className="sidebar-menu">
//           <div
//             className={`menu-item ${activeMenu === 'Dashboard' ? 'active' : ''}`}
//             onClick={() => handleMenuClick('Dashboard')}
//           >
//             <i className="fas fa-tachometer-alt"></i>
//             <span>Dashboard</span>
//           </div>
//           <div
//             className={`menu-item ${activeMenu === 'Order' ? 'active' : ''}`}
//             onClick={() => handleMenuClick('Order')}
//           >
//             <i className="fas fa-shopping-cart"></i>
//             <span>Order</span>
//           </div>
//           <div
//             className={`menu-item ${activeMenu === 'Customers' ? 'active' : ''}`}
//             onClick={() => handleMenuClick('Customers')}
//           >
//             <i className="fas fa-user-friends"></i>
//             <span>Customers</span>
//           </div>
//           <div
//             className={`menu-item ${activeMenu === 'Product' ? 'active' : ''}`}
//             onClick={() => handleMenuClick('Product')}
//           >
//             <i className="fas fa-box"></i>
//             <span>Product</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
//         {/* Top Bar */}
//         <div className="top-bar">
//           <div className="user-dropdown" style={{ marginLeft: 'auto' }}>
//             <button className="dropdown-btn">
//               <div className="user-avatar">
//                 <i className="fas fa-user"></i>
//               </div>
//               <span>Admin User</span>
//               <i className="fas fa-chevron-down"></i>
//             </button>
//             <div className="dropdown-content">
//               <button onClick={handleLogout} className="logout-btn">
//                 <i className="fas fa-sign-out-alt"></i> Logout
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="dashboard-content">
//           <h2>Welcome to Admin Dashboard</h2>
//           {/* Add dashboard widgets or content here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../style/AdminDashboard.css';
import AdminOrder from './AdminOrder';
import Customer from './Customer';
import AdminProduct from './AdminProduct';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

// Dashboard Home Component with Charts and Statistics
const DashboardHome = () => {
  // Sample data for the dashboard
  const stats = {
    totalSales: 125000,
    totalOrders: 1250,
    totalCustomers: 850,
    totalProducts: 120
  };

  const salesData = [
    { month: 'Jan', sales: 15000 },
    { month: 'Feb', sales: 18000 },
    { month: 'Mar', sales: 22000 },
    { month: 'Apr', sales: 19000 },
    { month: 'May', sales: 25000 },
    { month: 'Jun', sales: 28000 }
  ];

  const categoryData = [
    { category: 'Cricket', percentage: 35, color: '#2E227B' },
    { category: 'Football', percentage: 25, color: '#54548B' },
    { category: 'Tennis', percentage: 20, color: '#7B6BA8' },
    { category: 'Rugby', percentage: 20, color: '#A294C4' }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', amount: 1200, status: 'Completed' },
    { id: '#12346', customer: 'Jane Smith', amount: 850, status: 'Pending' },
    { id: '#12347', customer: 'Mike Johnson', amount: 2100, status: 'Processing' },
    { id: '#12348', customer: 'Sarah Wilson', amount: 750, status: 'Completed' }
  ];

  return (
    <div className="dashboard-home">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon sales">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="stat-info">
            <h3>Rs. {stats.totalSales.toLocaleString()}</h3>
            <p>Total Sales</p>
            <span className="stat-change positive">+12.5%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orders">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.totalOrders}</h3>
            <p>Total Orders</p>
            <span className="stat-change positive">+8.2%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon customers">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.totalCustomers}</h3>
            <p>Total Customers</p>
            <span className="stat-change positive">+15.3%</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon products">
            <i className="fas fa-box"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.totalProducts}</h3>
            <p>Total Products</p>
            <span className="stat-change neutral">+2.1%</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        {/* Sales Chart */}
        <div className="chart-container">
          <div className="chart-header">
            <h3>Monthly Sales</h3>
            <p>Sales performance over the last 6 months</p>
          </div>
          <div className="bar-chart">
            {salesData.map((item, index) => (
              <div key={index} className="bar-item">
                <div 
                  className="bar" 
                  style={{ 
                    height: `${(item.sales / 30000) * 100}%`,
                    backgroundColor: '#2E227B'
                  }}
                ></div>
                <span className="bar-label">{item.month}</span>
                <span className="bar-value">Rs. {item.sales.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Distribution */}
        <div className="chart-container">
          <div className="chart-header">
            <h3>Product Categories</h3>
            <p>Distribution by category</p>
          </div>
          <div className="pie-chart">
            <div className="pie-chart-visual">
              {categoryData.map((item, index) => (
                <div 
                  key={index} 
                  className="pie-segment"
                  style={{
                    '--percentage': item.percentage,
                    '--color': item.color,
                    '--rotation': categoryData.slice(0, index).reduce((sum, cat) => sum + (cat.percentage * 3.6), 0)
                  }}
                ></div>
              ))}
            </div>
            <div className="pie-legend">
              {categoryData.map((item, index) => (
                <div key={index} className="legend-item">
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.category} ({item.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="recent-orders">
        <div className="section-header">
          <h3>Recent Orders</h3>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>Rs. {order.amount}</td>
                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
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

const AdminDashboard = () => {
  return (
    <div className="dashboard" style={{ backgroundColor: 'white' }}>
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-content">
          <Routes>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="order" element={<AdminOrder />} />
            <Route path="customers" element={<Customer />} />
            <Route path="product" element={<AdminProduct />} />
            <Route path="*" element={<DashboardHome />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
