import React from 'react';
import './Cricket.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Main App component
const App = () => {
    return (
        <>
       <Navbar />


            <div className="app-container">
                {/* Page Title */}
                <h1 className="page-title">CRICKET PRODUCTS</h1>

                {/* Products Grid Container */}
                <div className="products-grid-container">
                    {/* Example Product Cards with Name and Price */}
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Bat+1" altText="Cricket Bat" productName="GM Cricket Bat" price="₹ 3,500" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Ball" altText="Cricket Ball" productName="Red Leather Ball" price="₹ 800" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Bat+2" altText="Cricket Bat" productName="Kookaburra Bat" price="₹ 4,200" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Bat+3" altText="Cricket Bat" productName="MRF Genius Bat" price="₹ 6,000" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Shoe" altText="Cricket Shoe" productName="Puma Cricket Shoes" price="₹ 2,800" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Pads" altText="Cricket Pads" productName="SG Leg Pads" price="₹ 1,500" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Helmet+1" altText="Cricket Helmet" productName="Shrey Helmet" price="₹ 2,000" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Ball+2" altText="Cricket Ball" productName="White Training Ball" price="₹ 650" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Cap" altText="Cricket Cap" productName="Team India Cap" price="₹ 450" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Bag" altText="Cricket Bag" productName="Kit Bag XL" price="₹ 2,500" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Bat+4" altText="Cricket Bat" productName="Junior Cricket Bat" price="₹ 1,800" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Net" altText="Cricket Net" productName="Practice Net" price="₹ 1,200" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Glasses" altText="Cricket Glasses" productName="Sports Sunglasses" price="₹ 900" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Bat+5" altText="Cricket Bat" productName="Willow Cricket Bat" price="₹ 5,000" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Stumps" altText="Cricket Stumps" productName="Wooden Stumps Set" price="₹ 1,100" />
                    <ProductCard imageUrl="https://placehold.co/200x200/FFFFFF/4B0082?text=Helmet+2" altText="Cricket Helmet" productName="Aero Helmet" price="₹ 2,300" />
                </div>
            </div>
            <Footer />
        </>
    );
};

// ProductCard component for individual product items
const ProductCard = ({ imageUrl, altText, productName, price }) => {
    const handleAddToCart = () => {
        // In a real application, you would add logic here to add the product to a cart
        console.log(`Added "${productName}" (${price}) to cart!`);
        // You could also show a confirmation message or update a cart state
    };

    return (
        <div className="product-card">
            {/* Product Image */}
            <img
                src={imageUrl}
                alt={altText}
                className="product-image"
                // Fallback for image loading errors
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/200x200/FFFFFF/4B0082?text=Image+Error`;
                }}
            />
            {/* Product Name and Price */}
            <div className="product-info">
                <p className="product-name">{productName}</p>
                <p className="product-price">{price}</p>
            </div>
            {/* Add to Cart Overlay */}
            <div className="add-to-cart-overlay">
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default App;
