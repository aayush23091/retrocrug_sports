import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Account created successfully!');
        setFormData({ name: '', email: '', password: '' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-left">
            <div className="logo">
              <img className="retro" src="/retrocruglogo.png" alt="logo" />
            </div>
          </div>
          <div className="nav-right">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">About</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section>
          <div className="welcomesection" style={{ backgroundImage: "url('/hero.png')" }}></div>
          <div className="detailsection">
            <h2>Create an Account</h2>
            <span className="subtext">Enter your details below</span>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="loginbtn" style={{ justifyContent: 'center', gap: '0' }}>
                <button type="submit" className="primary-btn">Create Account</button>
              </div>
              <p className="signup-text">
                Already have an account? <Link to="/LoginPage"><u>Log in</u></Link>
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footerfirst">
          <img src="/retrocruglogo.png" alt="logo" />
          <br />
          Copyright © 2025 - All rights reserved.
        </div>
        <div className="footersecond">
          <h3>Contact Us</h3>
          <p>Email: contact@retrocrug.com</p>
          <p>Phone: +977-9815855279</p>
          <p>Address: Koteswor, Kathmandu, Nepal</p>
        </div>
        <div className="footerthird">
          <h3>Follow us</h3>
          <a href="/"><img src="/instalogo.png" alt="Instagram" /></a>
          <a href="/"><img src="/twitterlogo.png" alt="Twitter" /></a>
          <a href="/"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="/"><img src="/githublogo.png" alt="GitHub" /></a>
        </div>
      </footer>
    </>
  );
};

export default SignUpPage;
