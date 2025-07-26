import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Product');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
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
          <div
            className={`menu-item ${activeMenu === 'Dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Dashboard')}
          >
            <i className="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </div>
          <div
            className={`menu-item ${activeMenu === 'Order' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Order')}
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Order</span>
          </div>
          <div
            className={`menu-item ${activeMenu === 'Product' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Product')}
          >
            <i className="fas fa-box"></i>
            <span>Product</span>
          </div>
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

        {/* Add Product Form */}
        <div className="add-product-container">
          <h2>Product</h2>
          <div className="form-container">
            <div className="product-info">
              <h3>Product Information</h3>
              <label>SKU</label>
              <input type="text" placeholder="Input no SKU" />
              <label>Product Name</label>
              <input type="text" placeholder="Input product name" />
              <div className="row">
                <div className="col">
                  <label>Size</label>
                  <input type="text" placeholder="Input Size" />
                </div>
                <div className="col">
                  <label>Color</label>
                  <input type="text" placeholder="Color" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Product Category</label>
                  <select>
                    <option>Select product category</option>
                    <option>Cricket</option>
                    <option>Football</option>
                    <option>Rugby</option>
                    <option>Tennis</option>
                  </select>
                </div>
                <div className="col">
                  <label>Price</label>
                  <input type="text" placeholder="Input Price" />
                </div>
              </div>
              <label>Quantity</label>
              <input type="text" placeholder="Input stock" />
              <label>Status Product</label>
              <select>
                <option>Select status product</option>
                <option>Available</option>
                <option>Out of Stock</option>
              </select>
            </div>

            <div className="image-product">
              <h3>Image Product</h3>
              <p><span style={{color: 'red'}}>Note</span>: Format photos SVG, PNG, or JPG (Max size 4mb)</p>
              <div className="image-upload-container">
                <div className="image-upload-box">Photo 1</div>
                <div className="image-upload-box">Photo 2</div>
                <div className="image-upload-box">Photo 3</div>
                <div className="image-upload-box">Photo 4</div>
              </div>
              <button className="save-product-btn">Save Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
