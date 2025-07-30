import React from 'react';
import '../style/Checkout.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
  return (
    <div className="checkout-page">
      <Header />
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form className="checkout-form">
          <label>
            First Name
            <input type="text" name="firstName" />
          </label>
          <label>
            Last Name
            <input type="text" name="lastName" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" />
          </label>
          <label>
            Address
            <input type="text" name="address" />
          </label>
          <label>
            City
            <input type="text" name="city" />
          </label>
          <label>
            State
            <input type="text" name="state" />
          </label>
          <label>
            ZIP Code
            <input type="text" name="zip" />
          </label>
          <label>
            Country
            <input type="text" name="country" defaultValue="Nepal" />
          </label>
          <fieldset>
            <legend>Payment Method</legend>
            <label>
              <input type="radio" name="paymentMethod" value="cod" defaultChecked />
              Cash on Delivery
            </label>
          </fieldset>
          <button type="submit" className="btn-primary">Place Order</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
