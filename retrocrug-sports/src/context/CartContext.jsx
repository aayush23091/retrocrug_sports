import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  console.log('CartProvider user:', user);
  console.log('CartProvider token:', token);

  useEffect(() => {
    if (user && user.id && token) {
      fetchCart();
    } else {
      setCartItems([]);
    }
  }, [user, token]);

  const fetchCart = async () => {
    console.log('fetchCart called');
    try {
      const res = await axios.get(`/api/users/${user.id}/cart`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('fetchCart response:', res.data);
      console.log('Cart items structure:', res.data.data);
      if (res.data.data && res.data.data.length > 0) {
        console.log('First cart item:', res.data.data[0]);
      }
      setCartItems(res.data.data);
    } catch (error) {
      console.error('Failed to fetch cart:', error.response ? error.response.data : error);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    console.log('addToCart called with:', productId, quantity); // Debug log
    try {
      await axios.post(
        `/api/users/${user.id}/cart`,
        { productId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCart();
    } catch (error) {
      console.error('Failed to add to cart:', error.response ? error.response.data : error); // Improved error log
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `/api/users/${user.id}/cart/${productId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCart();
    } catch (error) {
      console.error('Failed to remove from cart:', error.response ? error.response.data : error);
    }
  };

  const updateCartQuantity = async (productId, quantity) => {
    try {
      await axios.put(
        `/api/users/${user.id}/cart/${productId}`,
        { quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCart();
    } catch (error) {
      console.error('Failed to update cart quantity:', error.response ? error.response.data : error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
