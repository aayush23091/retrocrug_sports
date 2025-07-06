import React from 'react';
import { Link } from 'react-router-dom';
 


      const Homepage = () => {
  return (
    <>
    <body>
       <header>
        <nav>
          <div className="nav-left">
            <div className="logo">
              <img className="retro" src="retrocruglogo.png" alt="logo" />
            </div>
          </div>
          <div className="nav-right">
            
             <ul>
                      <li><Link to="/">Home</Link></li>
                       <li><Link to="/products">Products</Link></li>
                       <li><Link to="/contact">Contact</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/LoginPage">login</Link></li>
                       <li><Link to="/signup">signup</Link></li>
                      </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="promo-section">
          <div className="promo-content">
            <h2 className="headline">
              TIMELESS GEAR FOR TODAY’S<br /><span>WARRIORS</span>
            </h2>
            <p className="description">
              Discover the best in sports equipment and apparel, crafted for performance and durability. Whether you're a professional or a hobbyist, we have everything you need to excel.
            </p>
            <a href="#" className="explore-button">
              Explore Products
            </a>
          </div>
          <div className="promo-image">
            <img src="hero.jpg" alt="Sports gear showcase" />
          </div>
        </section>

        <section className="sports-section">
          <h3 className="section-title">SHOP BY SPORTS</h3>
          <div className="sports-grid">
            <a href="cricket.html" className="sport-card">
              <img src="cricket.jpg" alt="Cricket" />
              <div className="sport-label">CRICKET</div>
            </a>
            <a href="rugby.html" className="sport-card">
              <img src="rugby.jpg" alt="Rugby" />
              <div className="sport-label">RUGBY</div>
            </a>
            <a href="football.html" className="sport-card">
              <img src="football.webp" alt="Football" />
              <div className="sport-label">FOOTBALL</div>
            </a>
            <a href="tennis.html" className="sport-card">
              <img src="tennis.jpeg" alt="Tennis" />
              <div className="sport-label">TENNIS</div>
            </a>
          </div>
        </section>

        <section className="bestsellers-section">
          <div className="bestsellers-header">
            <h3>Best-sellers</h3>
            <a href="#" className="view-all">
              View all
            </a>
          </div>
          <div className="product-grid">
            <div className="product-card">
              <img src="kook_ghostpro_main.png" alt="Kookaburra Ghost Pro" />
              <p className="product-name">Kookaburra Ghost Pro</p>
              <p className="product-price">RS.85,000</p>
            </div>
            <div className="product-card">
              <img src="gilbertgt.jpg" alt="Gilbert G-TR4000" />
              <p className="product-name">Gilbert G-TR4000</p>
              <p className="product-price">RS.2,300</p>
            </div>
            <div className="product-card">
              <img src="uefaball.webp" alt="adidas Football Pro" />
              <p className="product-name">adidas Football Pro</p>
              <p className="product-price">RS.5,500</p>
            </div>
            <div className="product-card">
              <img src="wilsonracket.jpeg" alt="Wilson Tour Slam" />
              <p className="product-name">Wilson Tour Slam</p>
              <p className="product-price">RS.7,500</p>
            </div>
          </div>
        </section>

        <section className="cricket-hero">
          <div className="overlay">
            <h1>
              Cricket is more than
              <br />just a game
            </h1>
            <a href="#" className="btn">
              Explore Cricket Products
            </a>
          </div>
        </section>

        <section className="exploreproduct-section">
          <div className="exploreproduct-header">
            <h3>Explore Products</h3>
            <a href="#" className="view-all">
              View all
            </a>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <img src="ssbat.jpg" alt="SS English Willow" />
              <p className="product-name">SS English Willow</p>
              <p className="product-price">RS.10,000</p>
            </div>
            <div className="product-card">
              <img src="kookaburraball.jpg" alt="Kookaburra Ball" />
              <p className="product-name">Kookaburra Ball</p>
              <p className="product-price">RS.5,500</p>
            </div>
            <div className="product-card">
              <img src="forzarugby.jpg" alt="Forza Rugby Ball" />
              <p className="product-name">Forza Rugby Ball</p>
              <p className="product-price">RS.1,500</p>
            </div>
            <div className="product-card">
              <img src="rugbyhelmet.jpg" alt="Surlim Soft Helmet" />
              <p className="product-name">Surlim Soft Helmet</p>
              <p className="product-price">RS.3,500</p>
            </div>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <img src="wilsonball.jpeg" alt="Wilson Roland Garros" />
              <p className="product-name">Wilson Roland Garros</p>
              <p className="product-price">RS.600</p>
            </div>
            <div className="product-card">
              <img src="mryodball.jpg" alt="Mr.Yod Football" />
              <p className="product-name">Mr.Yod Football</p>
              <p className="product-price">RS.850</p>
            </div>
            <div className="product-card">
              <img src="gkgloves.webp" alt="Uhlsport GK Gloves" />
              <p className="product-name">Uhlsport GK Gloves</p>
              <p className="product-price">RS.3,500</p>
            </div>
            <div className="product-card">
              <img src="headteniis.jpeg" alt="Head TI Conquest" />
              <p className="product-name">Head TI Conquest</p>
              <p className="product-price">RS.5,500</p>
            </div>
          </div>
        </section>

        <section className="exploreproduct-section">
          <div className="exploreproduct-header">
            <h3>New Arrivals</h3>
            <a href="#" className="view-all">
              View all
            </a>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <img src="gmshoes.jpg" alt="GM 2020 All Rounder" />
              <p className="product-name">GM 2020 All Rounder</p>
              <p className="product-price">RS.5,000</p>
            </div>
            <div className="product-card">
              <img src="rugbyshoes.webp" alt="Canterbury Phoenix Raze" />
              <p className="product-name">Canterbury Phoenix Raze</p>
              <p className="product-price">RS.7,000</p>
            </div>
            <div className="product-card">
              <img src="footballshoes.jpg" alt="Vector X Carbon Pro" />
              <p className="product-name">Vector X Carbon Pro</p>
              <p className="product-price">RS.3,000</p>
            </div>
            <div className="product-card">
              <img src="wilsonshoes.png" alt="Wilson Rush Pro 4.5 AC" />
              <p className="product-name">Wilson Rush Pro 4.5 AC</p>
              <p className="product-price">RS.5,500</p>
            </div>
          </div>
        </section>

        <section className="brands-section">
          <h2>BRANDS WE CARRY</h2>
          <div className="brand-logos">
            <img src="logo-ss.png" alt="SS" />
            <img src="logo-gm.png" alt="GM" />
            <img src="New_Balance_logo.svg.png" alt="New Balance" />
            <img src="Logo_NIKE.svg" alt="Nike" />
            <img src="Adidas_Logo.svg" alt="Adidas" />
            <img src="Puma_complete_logo.svg.png" alt="Puma" />
            <img src="reeboklogo.png" alt="Reebok" />
            <img src="wilsonlogo.png" alt="wilson" />
            <img src="vs-150x150.png" alt="vs" />
          </div>
        </section>
      </main>

      <footer>
        <div className="footerfirst">
          <img src="retrocruglogo.png" alt="logo" />
          <br />Copyright © 2025 - All rights reserved.
        </div>
        <div className="footersecond">
          <h3> Contact Us</h3>
          <p>Email:contact@retrocrug.com</p>
          <p>Phone: +977-9815855279</p>
          <p>Address: Koteswor, Kathmandu, Nepal</p>
        </div>
        <div className="footerthird">
          <h3>Follow us</h3>
          <a href="/">
            <img src="instalogo.png" alt="instagram" />
          </a>
          <a href="/">
            <img src="twitterlogo.png" alt="twitter" />
          </a>
          <a href="/">
            <img src="facebook.png" alt="facebook" />
          </a>
          <a href="/">
            <img src="githublogo.png" alt="github" />
          </a>
        </div>
      </footer>

      </body>
    </>
  );
};

export default Homepage;
  


  