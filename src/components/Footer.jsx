import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} WeWantWaste. All rights reserved.</p>
      <p><a href="mailto:support@wewantwaste.co.uk">support@wewantwaste.co.uk</a></p>
    </footer>
  );
};

export default Footer;
