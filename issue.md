# Phase 2 Bug Fixes: Cart Synchronization and UI Issues

## Objective
Address two critical bugs that emerged after implementing the "Add to Cart" logic. These bugs affect cross-component state synchronization for inventory display and the visual layout of the Cart Modal.

## Identified Issues

### 1. Inconsistent Inventory Display Across Components
- **Description:** Adding rooms to the cart from one section (e.g., Hero Section) does not update the displayed available quantities in other sections (e.g., Book Section and the Rooms Page).
- **Example:** If a user adds 3 Basic Rooms (out of 19 available) to the cart via the Hero Section, the Book Section and Rooms Page still display 19 available rooms instead of 16.
- **Expected Behavior:** The "Available Rooms" count must be globally synchronized. Every component displaying availability must calculate its displayed value dynamically by subtracting the quantities already reserved in the global cart state for those specific dates.

### 2. Cart Modal UI/UX Layout Errors
- **Description:** The Cart Modal has severe layout and styling issues:
  - The background of the listed rooms inside the cart is invisible or transparent, making the text hard to read.
  - The fixed header and footer of the modal are overlapping or blocking the scrollable list of rooms in the cart.
- **Expected Behavior:**
  - The listed room items must have a solid, distinct background color (respecting light/dark mode themes) to ensure readability.
  - The modal must have a proper flexbox layout (`flex-col`) where the header and footer are fixed, and the inner container for cart items (`flex-1 overflow-y-auto`) scrolls independently without being obstructed by the header or footer.

### 3. Add input number on cart button inside room list item.
- After user click add to cart button, it will show input number to choose how many rooms to add. If the input number is 0, it will remove the item from the cart.
---

**Senior Developer Action Required:**
Please investigate and fix the state synchronization issue so that `HeroSection`, `BookSection`, and any relevant `Rooms` pages react to `CartContext` changes. Additionally, refactor the CSS/Tailwind classes in `CartModal.tsx` to fix the z-index, background, and overflow layout issues.
