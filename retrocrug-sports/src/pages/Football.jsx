import React, { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../style/ProductCard.css';

const backendUrl = "http://localhost:5000";

const Football = () => {
  const { products, refreshProducts } = useProducts();
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Refresh products when component mounts
    refreshProducts();
  }, []);
  
  const footballProducts = products.filter(product => product.category === 'Football');
  
  console.log('All products:', products);
  console.log('Football products:', footballProducts);

  return (
    <>
      <Header />
      <div className="user-products-page">
        <h2>Football Products</h2>
        <div className="products-grid">
          {footballProducts.length === 0 && <p>No football products available.</p>}
          {footballProducts.map(product => {
            console.log('Rendering product:', product);
            let imageUrl = '/default-product.png';
            
            if (product.imageUrls) {
              // Handle different possible formats of imageUrls
              if (Array.isArray(product.imageUrls) && product.imageUrls.length > 0) {
                // If it's an array, use the first image
                imageUrl = product.imageUrls[0].startsWith('http') 
                  ? product.imageUrls[0] 
                  : backendUrl + product.imageUrls[0];
              } else if (typeof product.imageUrls === 'string') {
                // If it's a string, use it directly
                imageUrl = product.imageUrls.startsWith('http') 
                  ? product.imageUrls 
                  : backendUrl + product.imageUrls;
              }
            }
            
            return (
              <ProductCard
                key={product.id}
                name={product.productName}
                price={product.price}
                image={imageUrl}
                showAddToCart={true}
                onAddToCart={() => {
                  console.log('Adding to cart:', product.id);
                  addToCart(product.id, 1);
                }}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Football;