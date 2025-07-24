import React from 'react';
import './Tennis.css';
import Footer from './Footer';
import Header from './Header';

// Main App component
const App = () => (
  <>
    <Header />
    <div className="app-container">
      <h1 className="page-title">TENNIS PRODUCTS</h1>

      <div className="products-grid-container">
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/71kVhDViWxL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Tennis Racquet"
          productName="Wilson Pro Staff V13 Racquet"
          price="₹ 21,999"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/71x9toFHzIL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Tennis Balls"
          productName="HEAD Championship Tennis Balls (Pack of 3)"
          price="₹ 499"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/61UHHZVmRBL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Tennis Shoes"
          productName="Nike Court Lite 2 Shoes"
          price="₹ 4,999"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/71QJ7DG+WCL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Tennis Bag"
          productName="Babolat Pure Drive Tennis Kit Bag"
          price="₹ 5,499"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/81xjs4EFXXL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Tennis Cap"
          productName="Adidas Tennis Performance Cap"
          price="₹ 999"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/51Rk7zlyDCL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Tennis Wristbands"
          productName="Nike Swoosh Wristbands (Pair)"
          price="₹ 799"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/61UXw4N6L-L._AC_UL600_FMwebp_QL65_.jpg"
          altText="Tennis Strings"
          productName="Luxilon ALU Power 125 String"
          price="₹ 1,299"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/51XGJ31RWaL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Tennis Grips"
          productName="Yonex Super Grap Overgrip (Pack of 3)"
          price="₹ 399"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/61OGgFSpTjL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Sweatband"
          productName="Head Sweatband Set"
          price="₹ 599"
        />
        <ProductCard
          imageUrl="https://m.media-amazon.com/images/I/91j7PIzv2LL._AC_UL600_FMwebp_QL65_.jpg"
          altText="Training Net"
          productName="Portable Tennis Practice Net"
          price="₹ 3,999"
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
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default App;
