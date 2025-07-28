import React from 'react';
import '../style/BestSellers.css';

const Homepage = () => {
  const bestSellers = [
    {
      id: 1,
      name: 'SS English Willow',
      price: 'RS.10,500',
      image: '/bat.png',
      alt: 'Cricket Bat'
    },
    {
      id: 2,
      name: 'Kookaburra Ball',
      price: 'RS.5,500',
      image: '/ball.png',
      alt: 'Cricket Ball'
    },
    {
      id: 3,
      name: 'Forza Rugby Ball',
      price: 'RS.1,950',
      image: '/rugby.png',
      alt: 'Rugby Ball'
    },
     {
      id: 4,
      name: 'Wilson Racket',
      price: 'RS.6,950',
      image: '/rugby.png',
      alt: 'racket'
    }
  ];

  return (
    <div className="homepage">
      <section className="best-sellers">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best-sellers</h2>
            <a href="#" className="view-all">View all</a>
          </div>

          <div className="products-grid">
            {bestSellers.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.alt} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
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

export default Homepage;
