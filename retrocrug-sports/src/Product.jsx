import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import Footer from './Footer';
import Header from './Header';

const App = () => {
    return (
        <>
            <Header/>
            <div className="app-container">
                <h1 className="page-title">EXPLORE PRODUCTS BY SPORTS</h1>

                <div className="sports-categories-container">
                    <SportCard
                        title="CRICKET"
                        description="Dive into the world of cricket with our exclusive range of products."
                        imageUrl="./cricketproduct.jpg"
                        altText="Cricket Match"
                        navigateTo="/Cricket"
                    />

                    <SportCard
                        title="FOOTBALL"
                        description="Experience the thrill of football with our premium gear."
                        imageUrl="./footballproduct.avif"
                        altText="Football Match"
                        navigateTo="/Football"
                    />

                    <SportCard
                        title="RUGBY"
                        description="Unleash your power with our durable rugby equipment."
                        imageUrl="./rugbyproduct.webp"
                        altText="Rugby Match"
                        navigateTo="/Rugby"
                    />

                    <SportCard
                        title="TENNIS"
                        description="Serve up your best game with our high-quality tennis collection."
                        imageUrl="./tennisproduct.webp"
                        altText="Tennis Match"
                        navigateTo="/Tennis"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

const SportCard = ({ title, description, imageUrl, altText, navigateTo }) => {
    const navigate = useNavigate();

    return (
        <div className="sport-card">
            <img
                src={imageUrl}
                alt={altText}
                className="sport-card-image"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/800x400/4B0082/FFFFFF?text=Image+Not+Available`;
                }}
            />
            <div className="sport-card-overlay">
                <h2 className="sport-card-title">{title}</h2>
                <p className="sport-card-description">{description}</p>
                <button
                    className="explore-button"
                    onClick={() => navigate(navigateTo)}
                >
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default App;