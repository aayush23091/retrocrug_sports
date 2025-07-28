import React, { useState } from 'react';
// import { Phone, Mail, MapPin, Send } from 'lucide-react';
import '../style/Contact.css'; 
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ContactUs() {
  return (
    <div>
        <Header />
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Any question or remarks? Just write us a message!</p>
      <div className="contact-card">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li><span className="icon">📞</span>9815855279</li>
            <li><span className="icon">✉️</span>retrocrug@gmail.com</li>
            <li><span className="icon">📍</span>koteswor,kathmandu,Nepal</li>
          </ul>
          <div className="info-decor" />
        </div>
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="row">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <textarea placeholder="Write your message.."></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      
    </div>
    <Footer />
    </div>
  );
}
