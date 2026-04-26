# Phase 2: Booking Cart System & Real-Time Inventory Management

## Objective
Implement a robust client-side cart system that allows users to select multiple rooms and quantities before proceeding to checkout. This phase focuses on state management, UI feedback, and strict inventory validation to ensure a seamless booking experience.

## Functional Requirements

### 1. Global Cart State Management
- **Persistence:** Implement a global state (e.g., React Context or a custom hook) to manage cart items across the application.
- **Cart Logic:**
  - Users can add rooms to the cart with specific quantities.
  - Room quantities in the cart must be validated against real-time availability.
  - Users **must not** be able to add more units than are currently available in the database.

### 2. UI & Navigation Enhancements
- **Cart Access:** Add a cart icon button to the immediate right of the primary "Book Now" CTA button in the Navigation Bar and relevant sections.
- **Visual Feedback (Badge):** The cart button must display a dynamic badge showing the total number of room units currently listed in the cart.
- **Real-Time Inventory Feedback:** As users add rooms to their cart, the displayed "Available Rooms" count in the UI must decrement immediately to reflect their local selection.

### 3. Inventory Protection & Validation
- **Strict Bounds:** The "Add to Cart" action must be disabled or restricted if the requested quantity exceeds `available = (total_inventory - active_bookings - current_cart_items)`.
- **Pre-Checkout Validation:** Before transitioning from the cart to the "Pending" booking state, perform a final server-side check to ensure inventory has not been claimed by another session.

### 4. Direct Booking Workflow
- **Cart to Checkout:** Transition the cart contents into the `bookings` table as a "Pending" transaction.
- **Data Integrity:** Ensure that the `start_date` and `end_date` from the availability checker are passed correctly through the cart lifecycle.

---

**Senior Developer Action Required:**
Please implement the `CartProvider` and associated hooks for state management. Update the `HeroSection` and `BookSection` to support the "Add to Cart" flow instead of the current direct alert. Integrate the Cart Icon with a dynamic badge into the `NavBar` and ensure UI availability counts stay in sync with the cart state.
