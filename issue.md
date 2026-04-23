# Edit Room Availability Checker Behavior

## Objective
Update the room availability form so that once a user fills in the required fields and submits, the form disappears and smoothly transitions into a list of available rooms.

## Tasks for Junior Developer

### 1. State Management & Conditional Rendering
- Implement state (e.g., using `useState`) to track whether the availability search form has been submitted.
- When the user submits the form, hide the form and display the list of available rooms in its place.

### 2. Create Room List Item UI
- Design a simple, clean list item component for the available rooms.
- **Content:** Display the **Room Type** (e.g., "Suite Room", "Boarding Room") and **Features** (e.g., "AC, WiFi, En-suite Bathroom") within the item.
- **Trailing Element:** Add an "Add to Cart" button or a cart icon on the trailing (right) side of the list item.
  - *Note:* The actual booking and cart logic will be handled in a future task. For now, focus strictly on the UI layout and state change.

### 3. Add Entrance Animations
- Implement an animation for the room list items as they appear on the screen.
- The items should have a **vertical flipping effect** (e.g., rotating along the X-axis from 90 degrees to 0 degrees as they enter).
- *Recommendation:* Use `framer-motion` (since it's already used in the project) to create this staggered vertical flip animation for a polished feel.

## Context
This task focuses on the visual transition from searching to viewing results. The "Add to Cart" UI is a placeholder for the upcoming booking functionality, which will allow users to flexibly book rooms.
