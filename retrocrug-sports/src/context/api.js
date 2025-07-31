import axios from "axios";

const API_BASE = "http://localhost:5001/api";

const api = axios.create({
  baseURL: API_BASE,
});

// Export api instance as default
export default api;

// Add a request interceptor to automatically add the Authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    console.log('Interceptor token:', token);
    if (token) {
      // Make sure headers object exists
      config.headers = config.headers || {};
      // Set Authorization header
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Setting Authorization header:', config.headers.Authorization);
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Auth APIs
export const loginUser = (data) => api.post('/auth/login', data);
export const fetchCurrentUser = () => api.get('/auth/init');

// Product APIs
export const fetchProducts = (category) => api.get('/product', { params: { category } });
export const createProduct = (data) => api.post('/product', data);
export const updateProduct = (id, data) => api.put(`/product/${id}`, data);
export const deleteProduct = (id) => api.delete(`/product/${id}`);

// User APIs (existing)
export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (data) => api.post('/users', data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);
export const updateUserProfile = (data) => {
  console.log("updateUserProfile called with data:", data);
  return api.put('/users/profile', data);
};

// Contact APIs
export const sendContactMessage = (data) => {
  console.log('Sending contact message to API:', data);
  return api.post('/contact', data);
};
// The API base URL already includes '/api', so we need to match the backend routes
export const getContactMessages = () => {
  const token = localStorage.getItem('access_token');
  console.log('Calling getContactMessages with token:', token);
  return api.get('/admin/contact', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
export const getContactMessageById = (id) => {
  const token = localStorage.getItem('access_token');
  return api.get(`/admin/contact/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
export const markContactMessageAsRead = (id) => {
  const token = localStorage.getItem('access_token');
  return api.put(`/admin/contact/${id}/read`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
export const deleteContactMessage = (id) => {
  const token = localStorage.getItem('access_token');
  return api.delete(`/admin/contact/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

// API instance is already exported as default
