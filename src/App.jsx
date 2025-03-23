import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipSelectionPage from './pages/SkipSelectionPage';
import CartPage from './pages/CartPage';
import './index.css'; 

function App() {
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode from <body class="dark"> OR match media
  useEffect(() => {
    const bodyDark = document.body.classList.contains('dark');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(bodyDark || systemDark);
  }, []);

  // Choose leaf image based on theme
  const leafSrc = isDark
    ? '/Brown leaf.png' // 🍂 Brown (dark mode)
    : '/Green leaf.png'; // 🌿 Green (light mode)

  return (
    <Router>
      {/* Falling Leaves Background */}
      <div className="leaf-container">
        <img className="leaf" src={leafSrc} alt="Leaf" />
        <img className="leaf" src={leafSrc} alt="Leaf" />
        <img className="leaf" src={leafSrc} alt="Leaf" />
        <img className="leaf" src={leafSrc} alt="Leaf" />
        <img className="leaf" src={leafSrc} alt="Leaf" />
        <img className="leaf" src={leafSrc} alt="Leaf" />
        <img className="leaf" src={leafSrc} alt="Leaf" />
        <img className="leaf" src={leafSrc} alt="Leaf" />
        <img className="leaf" src={leafSrc} alt="Leaf" />
      </div>

      {/* Main App Content */}
      <Header />
      <Routes>
        <Route path="/" element={<SkipSelectionPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
