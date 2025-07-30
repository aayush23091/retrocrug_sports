import React from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../style/ProductCard.css';

const backendUrl = "http://localhost:5000";

const Rugby = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const rugbyProducts = products.filter(product => product.category === 'Rugby');

  return (
    <>
      <Header />
      <div className="user-products-page">
        <h2>Rugby Products</h2>
        <div className="products-grid">
          {rugbyProducts.length === 0 && <p>No rugby products available.</p>}
          {rugbyProducts.map(product => (
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

export default Rugby;