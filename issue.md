# Task: Recreate Book Section

## Objective
Recreate the "Book Section" to provide a seamless checking and booking experience. This section will feature an availability check form, display available rooms as interactive cards, and include a modal sheet for detailed room views. Also integrate "Book" CTA button on navbar to have pulse animation and change color while section active

## Requirements

1. **Availability Form (Existing):**
   - Retain and use the current form component being used in the project for checking room availability.
   - Ensure the form correctly triggers the availability check and manages the loading/results state.

2. **Available Rooms List (Interactive Cards):**
   - After the user submits the availability form and checks the dates, display a list or grid of cards representing the available rooms.
   - Each card must display the following information:
     - **Availability Ratio/Status:** Show the number of available rooms over total rooms (e.g., "7/19 for Boarding Room").
     - **Room Name:** The name/type of the room.
     - **Simple Description:** A short, engaging excerpt describing the room.
     - **Features & Icons:** Icons representing the specific features and amenities of every room.
     - **Rating:** The current rating/reviews for the room.
   - **Call to Action:** Add a prominent **"Book"** button directly on the card.

3. **Room Details Modal (Sheet View):**
   - Implement interactive behavior where clicking the card opens a detailed view.
   - The detailed view should appear as a **Modal Sheet** (overlay or bottom sheet).
   - The modal sheet must contain:
     - Comprehensive details of the selected room.
     - A dedicated **"Book"** button inside the detail sheet to allow users to book directly from this expanded view.

4. **Integrate "Book" CTA Button**
   - While book section is active change the color of "Book" CTA Button
   - Use the accent color.
   - Add smooth pulse animation.

5. **Implementation & UX:**
   - Isolate these features into a cohesive set of components structured within `src/app/ui/`.
   - Ensure a smooth transition between the form submission and the display of the available room cards.
   - Use `framer-motion` (or existing animation libraries) for smooth appearances of the cards and the modal sheet.
   - Verify that the layout is fully responsive and looks great on both mobile and desktop screens.
