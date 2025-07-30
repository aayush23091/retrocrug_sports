import React from 'react';
import { useProducts } from '../context/ProductContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/ProductCard.css';

const backendUrl = "http://localhost:5000";

const Football = () => {
  const { products } = useProducts();
  const footballProducts = products.filter(product => product.category === 'Football');

  return (
    <>
      <Header />
      <div className="user-products-page">
        <h2>Football Products</h2>
        <div className="products-grid">
          {footballProducts.length === 0 && <p>No football products available.</p>}
          {footballProducts.map(product => (
            <div key={product._id || product.id} className="product-card">
              <div className="product-image">
                <img
                  src={product.imageUrls && product.imageUrls.length > 0 ? backendUrl + product.imageUrls[0] : '/default-product.png'}
                  alt={product.productName}
                />
              </div>
              <div className="product-info">
                <h3>{product.productName}</h3>
                <p className="product-price">₹{product.price}</p>
                <p className="product-qty">Stock: {product.quantity}</p>
                <p className="product-category">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Football;
