import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;
