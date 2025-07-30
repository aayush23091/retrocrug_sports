// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ProductProvider } from './context/ProductContext';
// import { CartProvider } from './context/CartContext';
// import { AuthProvider } from './context/AuthContext';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Homepage from './pages/Homepage';
// import Tennis from './pages/Tennis';
// import Football from './pages/Football';
// import Rugby from './pages/Rugby';
// import Cricket from './pages/Cricket';
// import Cart from './pages/Cart';
// import LoginPage from './pages/LoginPage';
// import SignUpPage from './pages/SignUpPage';
// import './style/App.css';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <ProductProvider>
//           <CartProvider>
//             <Header />
//             <Routes>
//               <Route path="/" element={<Homepage />} />
//               <Route path="/tennis" element={<Tennis />} />
//               <Route path="/football" element={<Football />} />
//               <Route path="/rugby" element={<Rugby />} />
//               <Route path="/cricket" element={<Cricket />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/signup" element={<SignUpPage />} />
//             </Routes>
//             <Footer />
//           </CartProvider>
//         </ProductProvider>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;



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
import AdminDashboard from './admin_pages/AdminDashboard';

import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { AdminRoute, UserRoute } from './ProtectedRoutes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/loginPage" element={<LoginPage />} />
              <Route path="/dashboard" element={
                <UserRoute>
                  <Dashboard />
                </UserRoute>
              } />
              <Route path="/admin/*" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
              <Route path="/admin-dashboard" element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
              <Route path="/cricket" element={<Cricket />} />
              <Route path="/football" element={<Football />} />
              <Route path="/rugby" element={<Rugby />} />
              <Route path="/tennis" element={<Tennis />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;