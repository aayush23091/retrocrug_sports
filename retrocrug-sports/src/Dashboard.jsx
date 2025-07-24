import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NewArrivals from './NewArrivals';
import HeroSection from './HeroSection';
import BestSellers from './BestSellers';
import BrandsWeCarry from './BrandsWeCarry';
import Header from './Header';


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestSellers />
      <NewArrivals />
      <BrandsWeCarry />
      <Footer />
    </div>
  );
};

export default HomePage;
