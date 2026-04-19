# Issue: Update Navigation Bar Behavior and Layout for Landing Page

## Context
We are building a Single Page Application (SPA) to solve booking problems for a boarding house in Bali. The application will serve primarily as a promotional landing page that includes a booking form, alongside an admin dashboard to manage room availability. In the previous iteration, the visibility behavior of the navigation bar was not accurate and needs to be corrected.

## Task Overview
As a junior developer, your task is to edit the existing navigation bar (`NavBar`) for the main landing page. This includes updating the layout to organize the logo, links, and CTA, adjusting the scroll visibility behavior, and adding an active section highlight.

## Requirements

### 1. Structure & Layout
- **Logo:** Positioned on the left side of the navigation bar.
- **Section Navigation:** Positioned in the center of the navigation bar.
- **"Book Now" (CTA):** Positioned on the right side, acting as a Call-to-Action with a highlighted border.

### 2. Navigation Links
- The navigation bar should contain links to the key sections of the landing page:
  - **Home / Hero section:** Introduction to the boarding house.
  - **About/Features:** Details about the boarding house benefits, features, and services.
  - **Rooms:** Details about available rooms and amenities.
  - **Gallery:** Photos of the boarding house and surroundings.
  - **Location:** Map and directions to the boarding house in Bali.
  - **Book Now:** Quick link to the booking form section (styled as CTA).

### 3. Visibility and Scroll Behavior
- **At the top:** The navbar should be shown fully when at the very top of the website.
- **Not at the top:** The navbar should become transparent when not at the top.
- **Scrolling Up:** The navbar should be hidden while the screen is scrolled up.
- **Scrolling Down:** The navbar should appear again while the screen is scrolled down.
- **Animations:** Add smooth animations/transitions for all of these visibility changes.

### 4. Functionality
- **Smooth Scrolling:** When a user clicks a link in the navigation bar, the page should smoothly scroll to the corresponding section.
- **Active State:** The navigation buttons/links must be highlighted when the screen reaches the corresponding section on the page (scroll spy).

### 5. Styling (Tailwind CSS)
- Ensure the navigation bar is fully responsive (looks good on mobile and desktop). On mobile, consider a hamburger menu if there are too many links.
- Apply styling that matches the overall aesthetic of a Bali boarding house (clean, modern, tropical/warm tones).

## Technical Guidance
- The project is using **Next.js** (App Router) and **Tailwind CSS**.
- You will be editing the component inside the `app/ui/NavBar.tsx` directory.
- For the visibility, scroll direction, and active state, you can use React state and refs (e.g., listening to `window.addEventListener('scroll', ...)`).

## Definition of Done
- [ ] `NavBar` layout is updated (logo left, links center, CTA right).
- [ ] Navbar is visible at the top, transparent when not at the top.
- [ ] Navbar hides when scrolling up and appears when scrolling down, with animations.
- [ ] Nav links highlight accurately in accordance with the current section in view.
- [ ] Clicking links smoothly scrolls to the correct section.
- [ ] The component is responsive and displays correctly on both desktop and mobile views.
- [ ] Code is clean, well-commented, and follows project conventions.

## Additional Notes
Feel free to ask questions if you need clarification on the design or implementation details. Happy coding!