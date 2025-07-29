
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

const AdminDashboard = () => {
  return (
    <div className="dashboard" style={{ backgroundColor: 'white' }}>
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-content">
          <Routes>
            <Route path="dashboard" element={<h2>Welcome to Admin Dashboard</h2>} />
            <Route path="order" element={<AdminOrder />} />
            <Route path="customers" element={<Customer />} />
            <Route path="product" element={<AdminProduct />} />
            <Route path="*" element={<h2>Select an option from the sidebar</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
