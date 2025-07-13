import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NewArrivals from './NewArrivals';
import HeroSection from './HeroSection';
import BestSellers from './BestSellers';
import BrandsWeCarry from './BrandsWeCarry';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BestSellers />
      <NewArrivals />
      <BrandsWeCarry />
      <Footer />
    </div>
  );
};

export default HomePage;
