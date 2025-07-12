import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import './Navbar.css';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav>
        <div className="nav-left">
          <div className="logo">
            <img className="retro" src="/retrocruglogo.png" alt="logo" />
          </div>
        </div>
        
        <div className="nav-center">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/loginPage">Login</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <Link to="/cart"><ShoppingCart className="icon" /></Link>
          <div className="account-wrapper" onClick={toggleDropdown}>
            <User className="icon" />
            {isDropdownOpen && (
              <div className="dropdown">
                <Link to="/account">Account</Link>
                <Link to="/logout">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
