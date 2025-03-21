import React, { useEffect, useState } from 'react';
import { fetchSkipsByLocation } from '../api/skips';
import SkipCard from '../components/SkipCard';
import '../index.css'; // Your global styles

const SkipSelectionPage = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSkips = async () => {
      const data = await fetchSkipsByLocation();
      setSkips(data);
      setLoading(false);
    };

    getSkips();
  }, []);

  const handleSelect = (skip) => {
    alert(`You selected: ${skip.name}`);
  };

  return (
    <div className="container">
      <h1>Choose a Skip</h1>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading skips...</p>
      ) : (
        <div className="grid">
          {skips.map((skip) => (
            <SkipCard key={skip.id} skip={skip} onSelect={handleSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkipSelectionPage;
