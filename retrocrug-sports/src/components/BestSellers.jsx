import React, { useEffect, useState } from 'react';
import '../style/BestSellers.css';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  const { products } = useProducts();
  const [randomProducts, setRandomProducts] = useState([]);

  // Function to shuffle and pick a subset of products
  const getRandomProducts = (productsList, count = 4) => {
    const shuffled = [...productsList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    if (products.length > 0) {
      setRandomProducts(getRandomProducts(products));
    }
  }, [products]);

  return (
    <div className="homepage">
      <section className="best-sellers">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best-sellers</h2>
            <Link to="/product" className="view-all">View all</Link>
          </div>

          <div className="products-grid">
            {randomProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
<img src={`http://localhost:5000${product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : '/default-product.png'}`} alt={product.productName} />
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

export default BestSellers;
