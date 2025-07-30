import React from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../style/ProductCard.css';

const backendUrl = "http://localhost:5000";

const Tennis = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const tennisProducts = products.filter(product => product.category === 'Tennis');

  return (
    <>
      <Header />
      <div className="user-products-page">
        <h2>Tennis Products</h2>
        <div className="products-grid">
          {tennisProducts.length === 0 && <p>No tennis products available.</p>}
          {tennisProducts.map(product => (
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

export default Tennis;