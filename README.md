This is a modern, fully responsive redesign of the skip selection experience for WeWantWaste. Built with React, styled with pure CSS, animated with Framer Motion, and infused with engaging UI/UX features for both desktop and mobile users.

PROJECT STRUCTURE:

src/
── api/
── skips.js - API call to fetch skip options by postcode/location

── components/
── Header.jsx - Top navigation with theme toggle and nav links
── Footer.jsx - Bottom section with copyright & contact
── FilterBar.jsx - Skip filters (road-safe, heavy waste) + sort dropdown
── SkipCard.jsx - Flip-style animated card for each skip option

── pages/
── SkipSelectionPage.jsx - Main page that lists skips with filters & animations
── CartPage.jsx - Booking confirmation page with selected skip summary

── assets/
─ (custom PNGs like leaves, skip images)

── App.jsx - Root app component; sets up routes, layout & falling leaves

── index.css - Global styles including grid, animation, dark mode, and leaf effects

── main.jsx - React + Vite app entry point (loads App into the DOM)

Frontend Framework:

- Built with React + Vite;
- Custom pure CSS styling;
- Fully responsive: desktop, tablet & mobile support;

Fetches live skip data from:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

Flip Cards with Animation:

- Cards flip 180° on hover;
- Front: Image + name;
- Back: Description, price, and button

Smooth Framer Motion animations:

- Falling Leaves Effect;
- Seasonal leaf animation using <img> elements;
- Leaf style/color changes with light/dark mode;

Cart & Confirmation Page:

- Booking summary on the /cart route;
- Pulls selected skip from localStorage;
- Shows price breakdown: before VAT + VAT = total;
- Animated confirmation messaging;

Dark Mode Support:

- Transparent glass-style card back in dark mode;
- Glow & color contrast enhancements;
- Auto theme detection based on <body class="dark">.

FUTURE IDEAS:

-Admin panel to manage skips;
-Skip comparison tool;
-Checkout with delivery address and contact form;
