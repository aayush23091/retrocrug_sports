import React, { useEffect, useState } from 'react';
import '../style/NewArrivals.css';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const { products } = useProducts();
  const [randomExploreProducts, setRandomExploreProducts] = useState([]);
  const [randomNewArrivals, setRandomNewArrivals] = useState([]);

  // Function to shuffle and pick a subset of products
  const getRandomProducts = (productsList, count = 6) => {
    const shuffled = [...productsList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    if (products.length > 0) {
      setRandomExploreProducts(getRandomProducts(products, 8));
      setRandomNewArrivals(getRandomProducts(products, 4));
    }
  }, [products]);

  return (
    <div className="homepage">
      <section className="explore-products">
        <div className="container">
          <div className="section-header">
            <h2>Explore Products</h2>
            <Link to="/product" className="view-all">View all</Link>
          </div>
          <div className="products-grid">
            {randomExploreProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={`${import.meta.env.VITE_BACKEND_URL}${product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : '/default-product.png'}`} alt={product.productName} />
                </div>
                <div className="product-info">
                  <h3>{product.productName}</h3>
                  <p className="price">RS.{product.price}</p>
                </div>
                <div className="add-to-cart">
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>New Arrivals</h2>
            <Link to="/product" className="view-all">View all</Link>
          </div>
          <div className="products-grid">
            {randomNewArrivals.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={`${import.meta.env.VITE_BACKEND_URL}${product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : '/default-product.png'}`} alt={product.productName} />
                </div>
                <div className="product-info">
                  <h3>{product.productName}</h3>
                  <p className="price">RS.{product.price}</p>
                </div>
                <div className="add-to-cart">
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;
