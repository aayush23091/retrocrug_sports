import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Add a request interceptor to automatically add the Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend on mount (optional, but recommended)
  React.useEffect(() => {
    console.log('=== PRODUCT CONTEXT: Fetching products ===');
    api.get('/product')
      .then(res => {
        console.log('=== PRODUCT CONTEXT: Successfully fetched products ===');
        console.log('Response data:', res.data);
        console.log('Products array:', res.data.data);
        setProducts(res.data.data);
      })
      .catch(err => {
        console.error("=== PRODUCT CONTEXT: Failed to load products ===", err);
        console.error("Error details:", err.response?.data || err.message);
      });
  }, []);

  const addProduct = async (product) => {
    try {
      console.log('=== PRODUCT CONTEXT: Adding product ===');
      console.log('Product to add:', product);
      const res = await api.post('/product', product);
      console.log('=== PRODUCT CONTEXT: Successfully added product ===');
      console.log('Response:', res.data);
      setProducts(prev => {
        const newProducts = [...prev, res.data.data];
        console.log('Updated products array:', newProducts);
        return newProducts;
      });
    } catch (error) {
      console.error('=== PRODUCT CONTEXT: Failed to add product ===', error);
      console.error('Error details:', error.response?.data || error.message);
    }
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
