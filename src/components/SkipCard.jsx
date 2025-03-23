import React from 'react';
import './SkipCard.css';

const SkipCard = ({ skip, onSelect }) => {
  const totalPrice = skip.price_before_vat + skip.vat;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-card-front">
          <img src="/skip-sample-transparent.png" alt="Skip" />
          <h2>{skip.name || `Skip (${skip.size} yd³)`}</h2>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <p>{skip.description || 'Perfect for garden or household waste.'}</p>
          <p>Size: {skip.size} yd³</p>
          <p>Hire: {skip.hire_period_days} days</p>
          <p>Total: <strong>£{totalPrice}</strong></p>
          <button onClick={() => onSelect(skip)}>Select</button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
