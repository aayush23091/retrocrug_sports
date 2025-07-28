
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/HeroSection.css';

const SportsHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    {
      title: "TIMELESS GEAR FOR TODAY'S WARRIORS",
      description: "Discover the best in sports equipment and apparel, crafted for performance and durability. Whether you're a professional or a hobbyist, we have everything you need to excel.",
      image: "hero.jpg"
    },
    {
      title: "PREMIUM SPORTS COLLECTION",
      description: "Experience excellence with our curated selection of top-tier sports gear. From amateur to professional level, find the perfect equipment for your journey.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center"
    }
  ];

  const sportsCategories = [
    {
      name: "CRICKET",
      image: "cricket.jpg",
      route: "/Cricket"
    },
    {
      name: "RUGBY",
      image: "rugby.jpg",
      route: "/Rugby"
    },
    {
      name: "FOOTBALL",
      image: "football.webp",
      route: "/Football"
    },
    {
      name: "TENNIS",
      image: "tennis.jpeg",
      route: "/Tennis"
    }
  ];

  return (
    <div className="sports-homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div 
          className="hero-slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="hero-slide">
              <div className="hero-content">
                <h1 className="hero-title">
                  {slide.title}
                </h1>
                <p className="hero-description">
                  {slide.description}
                </p>
                <button className="hero-button" onClick={() => navigate('/Product')}>
                  EXPLORE PRODUCTS
                </button>
              </div>
              <div className="hero-image-container">
                <img 
                  src={slide.image} 
                  alt="Sports Equipment" 
                  className="hero-image"
                />
                <div className="hero-image-overlay"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slide Indicators */}
        <div className="slide-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slide-indicator ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Sports Categories Section */}
      <div className="sports-section">
        <h2 className="sports-title">SHOP BY SPORTS</h2>
        <div className="sports-grid">
          {sportsCategories.map((sport, index) => (
            <div
              key={index}
              className="sport-card"
              onClick={() => navigate(sport.route)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={sport.image} 
                alt={sport.name}
                className="sport-image"
              />
              <div className="sport-overlay"></div>
              <h3 className="sport-name">{sport.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsHomepage;
