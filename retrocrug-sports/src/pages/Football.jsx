import React from 'react';
import '../style/Football.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Main App component
const App = () => {
    return (
        <>
            <Header />
            <div className="app-container">
                <h1 className="page-title">FOOTBALL PRODUCTS</h1>
                <div className="products-grid-container">
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/61ZUwGloAmL._AC_UL600_FMwebp_QL65_.jpg" altText="Football" productName="Adidas Al Rihla Football" price="₹ 2,499" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/71d7lwC5EJL._AC_UL600_FMwebp_QL65_.jpg" altText="Football Shoes" productName="Nike Mercurial Vapor" price="₹ 4,199" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/71VmbPzBELL._AC_UL600_FMwebp_QL65_.jpg" altText="Shin Guards" productName="Nivia Shin Guards" price="₹ 450" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/51ksqcF3JgL._AC_UL600_FMwebp_QL65_.jpg" altText="Goalkeeper Gloves" productName="Puma GK Gloves" price="₹ 1,200" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/81bQZg2XgKL._AC_UL600_FMwebp_QL65_.jpg" altText="Football Jersey" productName="Team India Jersey" price="₹ 1,599" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/91B1H1YDKBL._AC_UL600_FMwebp_QL65_.jpg" altText="Football Socks" productName="Adidas Performance Socks" price="₹ 350" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/71lqzphU3ZL._AC_UL600_FMwebp_QL65_.jpg" altText="Football Bag" productName="Nivia Kit Bag" price="₹ 1,299" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/51n8iYuyRDL._AC_UL600_FMwebp_QL65_.jpg" altText="Training Cones" productName="Set of 10 Training Cones" price="₹ 600" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/51aVWnYBc+L._AC_UL600_FMwebp_QL65_.jpg" altText="Water Bottle" productName="Gatorade Squeeze Bottle" price="₹ 399" />
                    <ProductCard imageUrl="https://m.media-amazon.com/images/I/71rZlweKxdL._AC_UL600_FMwebp_QL65_.jpg" altText="Football Net" productName="Practice Goal Net" price="₹ 1,799" />
                </div>
            </div>
            <Footer />
        </>
    );
};

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
                    e.target.src = `https://placehold.co/200x200/FFFFFF/4B0082?text=Image+Error`;
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
