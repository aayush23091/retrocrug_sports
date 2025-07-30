import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  // Adjust the role check as per your user object structure
  return user && user.role === 'admin' ? children : <Navigate to="/loginPage" />;
};

export default AdminRoute;