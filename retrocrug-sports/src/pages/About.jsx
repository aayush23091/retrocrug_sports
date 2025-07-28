import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="about-wrapper">
        <div className="about-left">
          <img src="/cricketabout.webp" alt="Cricket" className="img-cricket" />
          {/* <img src="/rugbyabout.jpg" alt="Rugby" className="img-rugby" /> */}
          <div className="ratings-card">
            <p>Best ratings</p>
            <div className="rating-bar">
              <div className="rating-fill" />
            </div>
            <div className="emojis">😐 😁 😊 😍 😎</div>
          </div>
        </div>

        <div className="about-right">
          <img src="/sportsitem.webp" alt="Sports Items" className="sports-banner" />
          <p className="small-heading">A BIT</p>
          <h2 className="main-heading">ABOUT US</h2>
          <p className="description">
            Welcome to RetroCrug Sports — your ultimate destination for premium sports gear and equipment.
            Founded with a passion for sports and performance, we aim to empower athletes of all levels with
            high-quality, reliable, and stylish gear. Whether you're into cricket, football, basketball, or fitness,
            our handpicked collection blends durability with modern design to help you perform at your best.
            At RetroCrug Sports, we believe in the spirit of the game and are committed to supporting your journey
            with top-notch products and exceptional service. Play harder, train smarter — only with RetroCrug Sports.
          </p>
          <button className="explore-btn" onClick={() => navigate('/Dashboard')}>
            EXPLORE MORE
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
