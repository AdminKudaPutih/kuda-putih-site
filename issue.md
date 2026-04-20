# Issue: Create Rooms Overview Section

## Objective
Implement an engaging and dynamic "Rooms Overview" section to showcase the boarding house rooms, suite rooms, and the overall environment.

## Requirements

### Title
- Add title of the section
- Add simple optimized description of the section

### Content & Layout (Zigzag Layout)
- The section should feature 3 large images organized in a zigzag layout.
- **Section 1 (Top Left): Boarding Room**
  - Place a large image on the top left.
  - Beside it, add a title and a simple description about the standard boarding room.
- **Section 2 (Middle Right): Suite Room**
  - Place the second image in the middle-right (positioned below the first section's text/title).
  - Add a title and description beside the image to describe the suite room.
- **Section 3 (Bottom Left): Environment**
  - Place the third image below the second section (aligned left to complete the zigzag flow).
  - Include a title and description to highlight the overall environment and surroundings of the boarding house.

### Technical Requirements
- **Image Component**: Ensure you use the React `<Image />` component (e.g., `next/image` if using Next.js) for all 3 images with proper `alt` tags for accessibility and performance optimization.
- **Scroll Animations**: Use the `framer-motion` library to add scroll-based animations:
  - Elements should animate "on scroll" as they enter the viewport (e.g., fade in, slide from left/right depending on their position in the zigzag layout).
  - Use `whileInView` or similar hooks from `framer-motion` to trigger animations dynamically when the user scrolls to this section.

### Styling
- Use Tailwind CSS (or existing CSS framework in the project) for responsive styling and sure the consistency of the design system by using existing brand colors and typography.
- Ensure the zigzag layout looks good on desktop but on mobile devices it should show as carousel image + description for better readability.
- Adhere to the established design system (premium aesthetic, sleek typography).