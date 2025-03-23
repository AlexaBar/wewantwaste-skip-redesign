import React, { useState } from 'react';
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
      <h1>
        Booking Confirmation
      </h1>

      <div>
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
         <div>
            🎉 Thank you! Your skip is booked for <strong>{date}</strong>.
            <br /> Confirmation sent to <strong>{email}</strong>.
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
