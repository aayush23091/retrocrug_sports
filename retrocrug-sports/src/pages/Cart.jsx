import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // import useNavigate
import '../style/Cart.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {
  const navigate = useNavigate();  // initialize navigate

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'SS English Willow',
      price: 10500,
      image: '/bat.png',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Mr.Yod Football',
      price: 850,
      image: '/football.png',
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, value) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(value) } : item
    );
    setCartItems(updated);
  };

  const getSubtotal = (item) => item.price * item.quantity;
  const getTotal = () => cartItems.reduce((sum, item) => sum + getSubtotal(item), 0);

  // handler for return to shop button
  const handleReturnToShop = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <Header />
      <div className="cart-container">
        <div className="cart-table">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-product">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
              <span>{item.price}</span>
              <select
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {String(i + 1).padStart(2, '0')}
                  </option>
                ))}
              </select>
              <span>{getSubtotal(item)}</span>
            </div>
          ))}
          <div className="cart-buttons">
            <button className="btn-outline" onClick={handleReturnToShop}>Return To Shop</button>
          </div>
        </div>

        <div className="cart-summary">
          <h3>Cart Total</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>{getTotal()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>{getTotal()}</span>
          </div>
          <button className="btn-primary">Proceed to checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
