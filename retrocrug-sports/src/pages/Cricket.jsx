import React from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../style/ProductCard.css';

const backendUrl = "http://localhost:5000";

const Cricket = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const cricketProducts = products.filter(product => product.category === 'Cricket');

  console.log('cricketProducts:', cricketProducts); // Debug log

  return (
    <>
      <Header />
      <div className="user-products-page">
        <h2>Cricket Products</h2>
        <div className="products-grid">
          {cricketProducts.length === 0 && <p>No cricket products available.</p>}
          {cricketProducts.map(product => (
            <ProductCard
              key={product._id || product.id}
              name={product.productName}
              price={product.price}
              image={product.imageUrls && product.imageUrls.length > 0 ? backendUrl + product.imageUrls[0] : '/default-product.png'}
              showAddToCart={true}
              onAddToCart={() => addToCart(product.id || product._id, 1)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cricket;

