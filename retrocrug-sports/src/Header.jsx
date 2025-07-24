
import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import { AuthContext } from './AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            {user ? (
              <>
                <li className="profile-dropdown" ref={dropdownRef}>
                  <button className="profile-icon-button" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={dropdownOpen}>
                    <img src="/profile-icon.png" alt="Profile" className="profile-icon" />
                  </button>
                  {dropdownOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/account" onClick={() => setDropdownOpen(false)}>Account</Link>
                      </li>
                      <li>
                        <button onClick={() => { logout(); setDropdownOpen(false); }} className="logout-button">Logout</button>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/Cart" className="cart-icon-link" aria-label="Cart">
                    <button className="cart-icon-button" type="button">
                      {/* Inline SVG cart icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart" viewBox="0 0 24 24">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li><Link to="/loginPage">Login</Link></li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

