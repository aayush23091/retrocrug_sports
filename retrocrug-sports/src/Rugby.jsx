import React from 'react';
import './Rugby.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Main App component
const App = () => (
  <>
    <Navbar />
    <div className="app-container">
      <h1 className="page-title">RUGBY PRODUCTS</h1>

      <div className="products-grid-container">
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/71hWYspA0ZL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Rugby Ball"
          productName="Gilbert Sirius Match Ball"
          price="₹ 3,499"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/71m5DqPQXlL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Rugby Boots"
          productName="Canterbury Phoenix Raze SG Boots"
          price="₹ 4,299"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/61lTqpPpHOL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Shoulder Pads"
          productName="Optimum Tribal Shoulder Pads"
          price="₹ 2,250"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/61JRE1dgo-L._AC_UL600_FMwebp_QL65_.jpg"
          altText="Headgear"
          productName="Canterbury Ventilator Headguard"
          price="₹ 1,799"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/71V0ZZjryDL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Mouthguard"
          productName="Shock Doctor Gel Max Mouthguard"
          price="₹ 699"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/71ThSLwCNiL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Rugby Jersey"
          productName="All Blacks Replica Jersey"
          price="₹ 2,999"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/61IJ-Y5We7L._AC_UL600_FMwebp_QL65_.jpg"
          altText="Rugby Shorts"
          productName="Gilbert Kiwi Pro Shorts"
          price="₹ 1,099"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/81k0G4VovhL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Rugby Socks"
          productName="Canterbury Team Socks"
          price="₹ 399"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/61lnmSyPRBL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Kicking Tee"
          productName="Gilbert Falcon 200 Kicking Tee"
          price="₹ 550"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/71pvVN-3kEL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Training Cones"
          productName="Set of 20 Optimum Marker Cones"
          price="₹ 799"
        />
      </div>
    </div>
    <Footer />
  </>
);

// ProductCard component
const ProductCard = ({ imageUrl, altText, productName, price }) => {
  const handleAddToCart = () => {
    console.log(`Added "${productName}" (${price}) to cart!`);
  };

  return (
    <div className="product-card">
      <img
        src={imageUrl}
        alt={altText}
        className="product-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            'https://placehold.co/200x200/FFFFFF/4B0082?text=Image+Error';
        }}
      />
      <div className="product-info">
        <p className="product-name">{productName}</p>
        <p className="product-price">{price}</p>
      </div>
      <div className="add-to-cart-overlay">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default App;
