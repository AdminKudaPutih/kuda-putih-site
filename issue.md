# Issue: Rooms Overview Section Missing Content on Mobile/LAN

## Description
There is a rendering bug in the `RoomsOverviewSection` component that needs to be fixed by a senior developer. 

When accessing the application via a local IP network address (e.g., `http://192.168.1.4:3000`) on a mobile device, the UI for the Rooms Overview section fails to render properly. Specifically, only the background is visible—none of the texts or images are rendering.

However, when accessing the application through `http://localhost:3000` on a desktop/local machine, the images and text render correctly, and the animations run very smoothly without any issues.

## Steps to Reproduce
1. Start the Next.js development server locally.
2. Connect a mobile device to the same local network.
3. Access the application via the local IP address on the mobile device (e.g., `http://192.168.1.4:3000`).
4. Scroll down to the Rooms Overview section.
5. Observe that only the background is rendered, while the images and texts are missing.
6. Verify on `localhost:3000` that the section renders and animates perfectly.

## Expected Behavior
The Rooms Overview section, including all its texts, images, and animations, should render correctly on mobile devices when accessed via the local network IP address, just as it does on `localhost`.

## Notes
- The issue seems to be specific to network access / mobile viewport rendering.
- Potential areas to investigate: `framer-motion` animation configurations interacting with screen sizes, Next.js `<Image/>` component behavior on different hostnames, or specific responsive CSS rules (`mobile first` approach considerations) that might be hiding the content unexpectedly.