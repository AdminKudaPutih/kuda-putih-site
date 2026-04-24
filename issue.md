# Update Room Section and Create Detailed Room Page

## Objective
Refactor the existing room sections to update room terminology, add interactive room detail modals, and build a dedicated, comprehensive "Room Page" to showcase all accommodation options with a seamless booking experience. For "Vibrant Environtment" part, its "View detail room" will display the facilities of Kuda Putih House, not the room.

## Tasks for Junior Developer

### 1. Update Room Terminology (Global)
- **Rename "Boarding rooms" to "Basic Rooms":** Search across the entire codebase (all pages, sections, and data arrays) and replace every instance of "Boarding rooms" or "Boarding room" with "Basic Rooms" (or "Basic Room").

### 2. Enhance the Homepage Room Section
- **Room Detail Modals:** 
  - Update the "View room detail" button on every room type card so that it triggers a pop-up modal.
  - **Modal Content:** The modal must display the room type title, a comprehensive description, a list of benefits/facilities (using icons), and user ratings (e.g., 4.8/5 stars).
  - **Scroll Lock:** Remember to implement a body scroll lock (`overflow: hidden` on the body) when the modal is open.
- **Navigation Button:**
  - At the bottom of the room section, add a clear call-to-action button (e.g., "Explore All Rooms") that navigates the user to the newly created Room Page.

### 3. Create the Dedicated "Room Page"
- **New Route:** Create a new page route at `src/app/rooms/page.tsx` (or similar depending on routing structure).
- **Nav Bar Behavior:** Implement the exact same Navigation Bar behavior as seen on the About page (e.g., transparent background at the top that turns solid upon scrolling).
- **Hero Section:** Build a visually striking hero header section at the top of the room page featuring a high-quality background image and engaging typography.
- **Room Type Details:** 
  - Below the hero section, create a well-structured layout to showcase every room type.
  - For each room type, you must include:
    - The room title and a detailed description.
    - Specific room facilities accompanied by relevant icons (e.g., using `lucide-react`).
    - User ratings.
    - Current availability status of the room (e.g., "Available", "Only 2 left!").
    - Room Price
- **"Add to Chart"**
  - Directly below the details for each room type, add a prominent "Add to Chart" button that includes a relevant icon (like a cart or calendar icon).

### 4. Technical & Design Requirements
- **Responsiveness:** Ensure that all new components, especially the new Room Page and the room detail modals, are fully responsive and function flawlessly across all screen sizes (mobile, tablet, desktop).
- **Design Consistency:** Strictly adhere to the project's premium design aesthetics, utilizing the custom color tokens (e.g., `bg-brand-primary`, `text-brand-accent`) and smooth micro-animations (e.g., `framer-motion` for the modals).
