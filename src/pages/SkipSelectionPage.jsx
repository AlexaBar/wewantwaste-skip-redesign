import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSkipsByLocation } from '../api/skips';
import { motion } from 'framer-motion';
import SkipCard from '../components/SkipCard';
import '../styles/global.css';
import FilterBar from '../components/FilterBar';
import '../index.css';

const SkipSelectionPage = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ onRoad: false, heavyWaste: false });
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const getSkips = async () => {
      const data = await fetchSkipsByLocation();
      setSkips(data);
      setLoading(false);
    };

    getSkips();
  }, []);

  useEffect(() => {
    const load = async () => {
      const data = await fetchSkipsByLocation();
      setSkips(data);
      setLoading(false);
    };
    load();
  }, []);
  const filteredSkips = skips
    .filter((s) => {
      if (filters.onRoad && !s.allowed_on_road) return false;
      if (filters.heavyWaste && !s.allows_heavy_waste) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price') {
        const priceA = a.price_before_vat + a.vat;
        const priceB = b.price_before_vat + b.vat;
        return priceA - priceB;
      }
      if (sortBy === 'size') {
        return a.size - b.size;
      }
      return 0;
    });

  const navigate = useNavigate();

  const handleSelect = (skip) => {
    alert(`You selected skip with id :${skip.id}`);
    localStorage.setItem('selectedSkip', JSON.stringify(skip));
    navigate('/cart');
  };

  return (
    <div className="container">
      <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Choose a Skip
</motion.h1>

<motion.p
  className="page-subtitle"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
  Select the skip size that best suits your needs
</motion.p>

      <FilterBar
        filters={filters}
        setFilters={setFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {loading ? (
        <p className="loading">Loading skips...</p>
      ) : (
        <div className="grid">
          {filteredSkips.map((skip) => (
            <SkipCard key={skip.id} skip={skip} onSelect={handleSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkipSelectionPage;
