// import axios from "axios";

// const API_BASE = "http://localhost:5001/api";

// const api = axios.create({
//   baseURL: API_BASE,
// });

// // Add a request interceptor to automatically add the Authorization header
// api.interceptors.request.use(
//   (config) => {
//     console.log("Making API request:", config);
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Auth APIs
// export const loginUser = (data) => api.post('/auth/login', data);
// export const fetchCurrentUser = () => api.get('/auth/init');

// // Product APIs
// export const fetchProducts = (category) => api.get('/product', { params: { category } });
// export const createProduct = (data) => api.post('/product', data);
// export const updateProduct = (id, data) => api.put(`/product/${id}`, data);
// export const deleteProduct = (id) => api.delete(`/product/${id}`);

// // User APIs (existing)
// export const getUsers = () => api.get('/users');
// export const getUserById = (id) => api.get(`/users/${id}`);
// export const createUser = (data) => api.post('/users', data);
// export const updateUser = (id, data) => api.put(`/users/${id}`, data);
// export const deleteUser = (id) => api.delete(`/users/${id}`);
// export const updateUserProfile = (data) => {
//   console.log("updateUserProfile called with data:", data);
//   return api.put('/users/profile', data);
// };

// export default api;


import axios from "axios";

const API_BASE = "http://localhost:5001/api";

const api = axios.create({
  baseURL: API_BASE,
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

export default api;