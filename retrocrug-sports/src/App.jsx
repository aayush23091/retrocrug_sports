
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage'; 
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Contact from './Contact';
import About from './About';
import Account from './Account';
import Cart from './Cart';
import Product from './Product';
import Cricket from './Cricket';
import Football from './Football';
import Rugby from './Rugby';
import Tennis from './Tennis';
import NotFound from './NotFound';
import Header from './Header';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cricket" element={<Cricket />} />
          <Route path="/Football" element={<Football />} />
          <Route path="/Rugby" element={<Rugby />} />
          <Route path="/Tennis" element={<Tennis />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
