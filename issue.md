# Implement Interactive Facilities Modal in About Section

## Objective
Enhance the existing facilities list in the About section by turning the list items into interactive buttons. When a user clicks on a facility, a detailed modal should appear displaying an image and a description of that facility, providing a more engaging user experience.

## Tasks for Junior Developer

### 1. Update Facilities List
- **Convert to Buttons:** Modify the existing list items of facilities in the About section so that they function as clickable buttons.
- **Styling Interactions:** Ensure the buttons have appropriate hover and active states to clearly indicate that they are interactive (e.g., cursor pointer, background color transition, or a subtle scale effect).

### 2. Create the Facility Detail Modal
- **Modal Component:** Build a reusable modal (dialog) component to display the details of the selected facility.
- **Content Structure:** The modal must include:
  - A high-quality image representing the specific facility.
  - A detailed text description of the facility.
  - A clear "Close" button (e.g., an 'X' icon) to dismiss the modal.
- **Click Outside to Close:** Implement functionality to close the modal if the user clicks on the backdrop/overlay behind the modal content.
- **Animations:** Add smooth entry and exit animations for the modal overlay and content (e.g., using `framer-motion` for fade and scale transitions).

### 3. Implement Modal State and Data Passing
- **State Management:** Use React state (`useState`) to manage the modal's visibility (open/closed) and to store the currently selected facility data.
- **Data Structure:** Ensure each facility item in your data array has an `image` and `description` property that can be passed to the modal.

### 4. Implement Body Scroll Lock (Crucial)
- **Scroll Prevention:** When the modal is open, the background page **must not** be scrollable.
  - **Implementation Hint:** You can achieve this by adding a CSS class or inline style (`overflow: hidden`) to the `document.body` when the modal opens, and removing it when the modal closes.
  - Make sure to use a `useEffect` hook to handle this side effect and properly clean up (restore scrolling) when the component unmounts or the modal closes.

## Design and Technical Reminders
- Maintain the project's premium design aesthetics (modern typography, smooth shadows, rounded corners).
- Use the Next.js `<Image />` component for the facility images inside the modal to ensure optimal performance and responsiveness.
- Ensure the modal layout is responsive—it should look great on both small mobile screens and large desktop monitors.
