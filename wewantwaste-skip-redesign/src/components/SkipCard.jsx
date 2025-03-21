import React from 'react';
import './SkipCard.css';

const SkipCard = ({ skip, onSelect }) => {
  return (
    <div className="skip-card">
      <h2>{skip.name}</h2>
      <p className="description">{skip.description}</p>
      <p className="size">Size: {skip.size} yd³</p>
      <p className="price">£{skip.price}</p>
      <button onClick={() => onSelect(skip)}>Select</button>
    </div>
  );
};

export default SkipCard;
