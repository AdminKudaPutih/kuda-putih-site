# Update Room Availability UI in Hero & Book Sections

## Objective
Harmonize the room availability checker behavior across the website while introducing distinct UI presentations for the results in different sections. The `HeroSection` will display results as a compact list, while the `BookSection` will upgrade to detailed room cards.

## Tasks for Junior Developer

### 1. Update Hero Section Availability Checker
- **Behavior Matching:** Modify the availability checker form in the `HeroSection` to match the behavior recently implemented in the `BookSection`. When the user submits the form, it should transition out and disappear.
- **Results UI (List View):** Display the available rooms as a vertical list in place of the hidden form.
  - The list items should be simple, containing the **Room Type**, **Features**, and an **"Add to Cart"** button/icon on the trailing right edge.
- **Animations:** Add a staggered entrance animation for the list items as they appear in the `HeroSection` (e.g., a vertical flipping effect `rotateX: 90` to `0` or a slide-up fade).

### 2. Redesign Book Section Results into Room Cards
- **Results UI (Card View):** Refactor the current simple list items in the `BookSection` into more visual, detailed Room Cards.
- **Card Content:** Each room card must contain the following elements:
  - **Picture of the room** (Use Next.js `<Image />` component with a placeholder or actual room image)
  - **Rating**
  - **Simple description**
  - **Room Type**
  - **Features**
  - **"Add to Cart"** button
- **Animations:** Implement an entrance animation for these room cards as they appear in the `BookSection` after the form is submitted (e.g., a scale-up or fade-in slide effect).

## Context
By differentiating the visual layout of the search results—a quick list view in the Hero section and an immersive card view in the Book section—we cater to different user intents. The Hero section provides fast, scannable options, while the Book section gives users the visual details they need before adding a room to their cart.
