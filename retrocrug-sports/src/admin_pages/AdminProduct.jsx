import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AdminProduct.css';
import Sidebar from './Sidebar';

const products = [
  {
    id: 'P1001',
    name: 'Football',
    price: 1200,
    stock: 30,
    category: 'Outdoor',
  },
  {
    id: 'P1002',
    name: 'Cricket Bat',
    price: 2500,
    stock: 15,
    category: 'Outdoor',
  },
  {
    id: 'P1003',
    name: 'Badminton Racket',
    price: 900,
    stock: 40,
    category: 'Indoor',
  },
  {
    id: 'P1004',
    name: 'Basketball',
    price: 1500,
    stock: 20,
    category: 'Outdoor',
  },
];

const AdminProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="product-section">
          <h2>Products</h2>
          <div className="search-bar-container">
            <input 
              type="text" 
              placeholder="Search for id, name Product" 
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className="add-product-btn" onClick={() => navigate('/admin/addproduct')}>
            Add Product <i className="fas fa-plus"></i>
          </button>
          <table className="products-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="product-name-id">
                      <a href="#" style={{ color: '#0275d8', fontWeight: '600', textDecoration: 'none' }}>
                        {product.id}
                      </a>
                      <div>{product.name}</div>
                    </div>
                  </td>
                  <td>Rs. {product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.category}</td>
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

export default AdminProduct;