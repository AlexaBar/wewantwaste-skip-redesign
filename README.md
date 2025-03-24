This is a modern, fully responsive redesign of the skip selection experience for WeWantWaste.
Built with React, styled with pure CSS and infused with engaging UI/UX features for both desktop and mobile users.

## Sandbox

The sandbox url is https://94hkjs-4173.csb.app/

## My Approach

I focused on modern UI/UX principles while keeping the existing functionality:

- Skip Card Redesign: Each skip option is displayed in an animated flip card with a clean front (image + title) and back (description + pricing ).
- Responsiveness: The app is fully responsive using `grid` and media queries for mobile, tablet, and desktop.
- Theme Awareness: Dark mode styling with transparent glassmorphism card backs.
- State Management: Minimal use of `localStorage` to persist selected skip data.
- Animations: Framer Motion adds smooth transitions on page elements, buttons, and confirmation steps.
- Maintainability: Code is component-based and readable, using only lightweight tools (no Tailwind or heavy UI kits).

## PROJECT STRUCTURE:

### Frontend Framework:

- Built with React + Vite;
- Custom pure CSS styling;
- Fully responsive: desktop, tablet & mobile support;

Fetches live skip data from:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

Flip Cards with Animation:

- Cards flip 180° on hover;
- Front: Image + name;
- Back: Description, price, and button

Cart & Confirmation Page:

- Booking summary on the /cart route;
- Pulls selected skip from localStorage;
- Shows price breakdown: before VAT + VAT = total;
- Animated confirmation messaging;

Dark Mode Support:

- Transparent glass-style card back in dark mode;
- Glow & color contrast enhancements;
- Auto theme detection based on <body class="dark">.

## FUTURE IDEAS:

- Admin panel to manage skips;
- Skip comparison tool;
- Checkout with delivery address and contact form;
