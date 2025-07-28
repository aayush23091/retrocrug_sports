import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'; 
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Cricket from './pages/Cricket';
import Football from './pages/Football';
import Rugby from './pages/Rugby';
import Tennis from './pages/Tennis';
import NotFound from './pages/NotFound';
import Header from './components/Header';

import { AuthProvider } from './context/AuthContext';

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
