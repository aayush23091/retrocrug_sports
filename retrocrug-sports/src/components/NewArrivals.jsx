import React from 'react';
import '../style/NewArrivals.css';

const SportsHomepage = () => {
  const exploreProducts = [
    { id: 1, name: "SS English Willow", price: "RS.10,500", icon: "🏏" },
    { id: 2, name: "Kookaburra Ball", price: "RS.5,500", icon: "🏏" },
    { id: 3, name: "Forza Rugby Ball", price: "RS.1,500", icon: "🏉" },
    { id: 4, name: "Summ Soft Helmet", price: "RS.3,200", icon: "🏈" },
    { id: 5, name: "Mr.Yosl Football", price: "RS 850", icon: "⚽" },
    { id: 6, name: "Uhlsport GK Gloves", price: "RS 3,000", icon: "🥅" },
    { id: 7, name: "Head Ti Conquest", price: "RS 5,000", icon: "🎾" },
    { id: 8, name: "Wilson Roland Garros", price: "RS 600", icon: "🎾" },
  ];

  const newArrivals = [
    { id: 1, name: "GM 2020 All Rounder", price: "RS 5,000", icon: "🏏" },
    { id: 2, name: "Canterbury Phoenix Rate", price: "RS 7,000", icon: "🏉" },
    { id: 3, name: "Vector X Carbon Pro", price: "RS 3,000", icon: "⚽" },
    { id: 4, name: "Wilson Rush Pro 4.5 AC", price: "RS 5,800", icon: "👟" },
  ];

  return (
    <div className="homepage">
      <section className="explore-products">
        <div className="container">
          <div className="section-header">
            <h2>Explore-Products</h2>
            <a href="#" className="view-all">View all</a>
          </div>
          <div className="products-grid">
            {exploreProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span style={{ fontSize: "48px" }}>{product.icon}</span>
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

      <section className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>New Arrivals</h2>
            <a href="#" className="view-all">View all</a>
          </div>
          <div className="products-grid">
            {newArrivals.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span style={{ fontSize: "48px" }}>{product.icon}</span>
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

export default SportsHomepage;
