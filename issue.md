# Enhance About Section and Create Detailed About Page

## Objective
Update the existing About section on the homepage to include new features and a call-to-action button, and create a comprehensive standalone "About" page to provide deeper insights into Kuda Putih House, complete with interactive feature cards.

## Tasks for Junior Developer

### 1. Update the Existing About Section (Homepage)
- **Add New Features:** Update the features list in the current About section to include:
  - "Gym and Yoga + trainer"
  - "Extra beds"
- **Add Call-to-Action Button:** Place a new button labeled **"Discover About Us! >>"** below the About section content.
  - This button should link to the new About page (e.g., `/about`).
  - Ensure the button styling matches the existing design system (vibrant colors, modern typography, hover effects).

### 2. Create the Detailed "About" Page
- **New Route/Page:** Create a new page route for the detailed About page.
- **Detailed Description:** Add a comprehensive text section providing more detailed information about Kuda Putih House's history, mission, or environment.
- **Image Gallery/Showcase:** Include high-quality images to describe the rooms and the surrounding environment. Ensure modern aesthetics and responsive layout.
- **Interactive Features Grid:** Create a grid layout to showcase the specific features of Kuda Putih House using interactive cards.

### 3. Implement Interactive Feature Cards
- **Card Layout:** Build a reusable feature card component for the grid.
- **Image Background:** Each card should use an image as its background or main visual to describe the specific feature.
- **Gradient Overlay:** On the bottom part of the image, add a transparent-to-solid-color gradient.
  - This gradient area will act as the container for the feature's icon and title.
- **Hover Interactions:**
  - When the user hovers over the card, the bottom gradient part should extend upwards to fill the entire card still in gradient background, so not totally hide image.
  - Upon expansion, reveal a simple description of the feature that was previously hidden.
  - Add smooth transition animations for both the background expansion and the text reveal. Ensure the animation feels dynamic and premium.

## Design Aesthetics Reminder
- Ensure the new page and components adhere to the project's premium design aesthetics.
- Use smooth gradients, modern typography, and subtle micro-animations.
- Use Next.js `<Image />` component for optimal performance and ensure responsive design across all devices.
- Use Next.js `<Link />` component on About Us button for optimal performance
