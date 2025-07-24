import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './LoginPage.css';
import axios from 'axios';
import { AuthContext } from './AuthContext.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setError('');

    try {
      const { email, password } = formData;

      // Example API call for login - adjust URL and payload as needed
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // Assuming response contains a token or user data on success
      if (response.status === 200) {
        // Save token or user info if needed, e.g. localStorage.setItem('token', response.data.token);
        login(response.data.user || { email }); // Set user in auth context
        navigate('/'); // Navigate to homepage after successful login
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message || 'Login failed. Please try again.';
      setError(errMsg);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <Header />

      <main>
        <section>
          <div className="welcomesection" style={{ backgroundImage: "url('/hero.png')" }}></div>
          <div className="detailsection">
            <h2>Log in to Retrocrug</h2>
            <span className="subtext">Enter your details below</span>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <div className="loginbtn" style={{ marginTop: '10px' }}>
                <button type="submit" className="primary-btn" disabled={pending} aria-label="Log in">
                  {pending ? 'Logging in...' : 'Log in'}
                </button>
                <a href="#">Forgot password?</a>
              </div>
              <p className="signup-text">
                Don't have an account? <Link to="/signup"><u>Sign up</u></Link>
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;
