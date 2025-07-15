
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <div className="logo">
            <img className="retro" src="/retrocruglogo.png" alt="logo" />
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Product">Products</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/loginPage">Login</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

