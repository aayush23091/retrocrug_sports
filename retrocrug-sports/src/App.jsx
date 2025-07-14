
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage'; 
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
