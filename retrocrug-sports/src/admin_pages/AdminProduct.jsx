// import React, { useState } from 'react';
// import '../style/AdminProduct.css';
// import Sidebar from './Sidebar';
// // Removed Topbar import as per request

// const AdminProduct = () => {
//   const [activeTab, setActiveTab] = useState('Cricket');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const products = [
//     {
//       id: '021231',
//       productName: 'Kookaburra Bat',
//       productImage: 'https://via.placeholder.com/40?text=Bat',
//       price: 30000,
//       qty: 234,
//       date: '04/17/23 at 8:25 PM',
//       status: 'Available'
//     },
//     {
//       id: '021232',
//       productName: 'Kookaburra Ball',
//       productImage: 'https://via.placeholder.com/40?text=Ball',
//       price: 1500,
//       qty: 80,
//       date: '04/17/23 at 8:25 PM',
//       status: 'Out of Stock'
//     },
//     {
//       id: '021233',
//       productName: 'SS Bat',
//       productImage: 'https://via.placeholder.com/40?text=Bat',
//       price: 10000,
//       qty: 50,
//       date: '04/17/23 at 8:25 PM',
//       status: 'Available'
//     },
//     {
//       id: '021234',
//       productName: 'GM shoes',
//       productImage: 'https://via.placeholder.com/40?text=Shoes',
//       price: 6000,
//       qty: 70,
//       date: '04/17/23 at 8:25 PM',
//       status: 'Out of Stock'
//     }
//   ];

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="main-content">
//         {/* Removed individual Topbar instance as per request */}
//         {/* Product Section */}
//         <div className="product-section">
//           <h2>Product</h2>

//           {/* Search Bar */}
//           <div className="search-bar-container">
//             <input type="text" placeholder="Search for id, name product" />
//             <button>
//               <i className="fas fa-search"></i>
//             </button>
//           </div>

//           {/* Tabs */}
//           <div className="tabs">
//             {['Cricket', 'Football', 'Rugby', 'Tennis'].map((tab) => (
//               <div
//                 key={tab}
//                 className={`tab ${activeTab === tab ? 'active' : ''}`}
//                 onClick={() => handleTabClick(tab)}
//               >
//                 {tab}
//               </div>
//             ))}
//           </div>

//           {/* Products Table */}
//           <table className="products-table">
//             <thead>
//               <tr>
//                 <th><input type="checkbox" /></th>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>QTY</th>
//                 <th>Date</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <tr key={index}>
//                   <td><input type="checkbox" /></td>
//                   <td className="product-name">
//                     <img src={product.productImage} alt={product.productName} />
//                     <div>
//                       <a href="#" style={{ color: '#d9534f', fontWeight: '600', textDecoration: 'none' }}>{product.id}</a>
//                       <div>{product.productName}</div>
//                     </div>
//                   </td>
//                   <td>{product.price}</td>
//                   <td>{product.qty}</td>
//                   <td>{product.date}</td>
//                   <td>
//                     <span className={`status ${product.status.replace(/\s/g, '')}`}>
//                       {product.status}
//                     </span>
//                   </td>
//                   <td className="action-buttons">
//                     <button title="View"><i className="fas fa-eye"></i></button>
//                     <button title="Edit"><i className="fas fa-edit"></i></button>
//                     <button title="Delete"><i className="fas fa-trash"></i></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <button className="new-product-btn">
//             New Product <i className="fas fa-plus"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProduct;


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
            <input type="text" placeholder="Search for id, name Product" />
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