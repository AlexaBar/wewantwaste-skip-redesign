import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CartPage.css';

const CartPage = () => {
  const stored = localStorage.getItem('selectedSkip');
  const skip = stored ? JSON.parse(stored) : null;

  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !date) {
      alert("Please fill out all fields.");
      return;
    }

    setSubmitted(true);
  };

  if (!skip) {
    return <div className="container"><h1>No skip selected</h1></div>;
  }
   // Calculate total price
   const priceBeforeVAT = skip.price_before_vat || 0;
   const vat = skip.vat || 0;
   const total = priceBeforeVAT + vat;

  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Booking Confirmation
      </motion.h1>

      <motion.div
        className="booking-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
          <div className="booking-box2">
        <h2>{skip.name || `Skip (${skip.size} yd³)`}</h2>
        <p>{skip.description}</p>
        <p>Size: {skip.size} yd³</p>
        <p>Hire Period: {skip.hire_period_days} days</p>

        <div className="price-summary">
          <p>Price before VAT: <strong>£{priceBeforeVAT.toFixed(2)}</strong></p>
          <p>VAT: <strong>£{vat.toFixed(2)}</strong></p>
          <p>Total Price: <strong className="highlight">£{total.toFixed(2)}</strong></p>
        </div>
      </div>
      
      
        {!submitted ? (
          <form onSubmit={handleSubmit} className="booking-form">
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Delivery Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>

            <button type="submit">Confirm Booking</button>
          </form>
        ) : (
          <motion.div
            className="success-message"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            🎉 Thank you! Your skip is booked for <strong>{date}</strong>.
            <br /> Confirmation sent to <strong>{email}</strong>.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CartPage;
