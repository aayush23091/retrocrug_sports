import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewArrivals from './NewArrivals';
import HeroSection from './HeroSection';
import BestSellers from './BestSellers';


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestSellers />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default HomePage;
