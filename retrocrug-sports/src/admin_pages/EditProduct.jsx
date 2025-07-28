import React, { useState } from 'react';
import '../style/EditProduct.css';
import { Sidebar, Topbar } from './AdminDashboard';

const EditProduct = () => {
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
      <Sidebar 
        sidebarCollapsed={sidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
        activeMenu={activeMenu} 
        handleMenuClick={handleMenuClick} 
      />
      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        <Topbar />
        {/* Edit Product Form */}
        <div className="edit-product-container">
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
                <div className="image-upload-box">
                  <img src="https://via.placeholder.com/80" alt="Product" />
                </div>
                <div className="image-upload-box">Photo 2</div>
                <div className="image-upload-box">Photo 3</div>
                <div className="image-upload-box">Photo 4</div>
              </div>
              <div className="buttons-container">
                <button className="discard-btn">Discard Changes</button>
                <button className="save-btn">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
