import React from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../style/ProductCard.css';

const backendUrl = "http://localhost:5000";

const Football = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const footballProducts = products.filter(product => product.category === 'Football');

  return (
    <>
      <Header />
      <div className="user-products-page">
        <h2>Football Products</h2>
        <div className="products-grid">
          {footballProducts.length === 0 && <p>No football products available.</p>}
          {footballProducts.map(product => (
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

export default Football;