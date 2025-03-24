import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <header className="header">
      <div className="logo">♻️ WeWantWaste</div>
      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink>
      </nav>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
};

export default Header;
