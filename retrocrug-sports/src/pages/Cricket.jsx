import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Cricket.css';

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
