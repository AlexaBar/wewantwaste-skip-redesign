import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filters, setFilters, sortBy, setSortBy }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="filter-bar">
      <div className="filter-options">
        <label>
          <input
            type="checkbox"
            name="onRoad"
            checked={filters.onRoad}
            onChange={handleChange}
          />
          Allowed on Road
        </label>
        <label>
          <input
            type="checkbox"
            name="heavyWaste"
            checked={filters.heavyWaste}
            onChange={handleChange}
          />
          Allows Heavy Waste
        </label>
      </div>

      <div className="sort-options">
        <label>Sort by:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="price">Price (Low → High)</option>
          <option value="size">Size (Small → Large)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
