import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/loginPage" />;
};

export default UserRoute;