import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Cricket.css';

const Cricket = () => {
  return (
    <>
      <Header />
      <div className="cricket-container">
        {/* Cricket content */}
      </div>
      <Footer />
    </>
  );
};

export default Cricket;
