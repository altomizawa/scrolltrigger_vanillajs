# SCROLLTRIGGER USING VANILLA JS

## Overview
Cosmos is a project built to challenge myself by using Vanilla JavaScript and CSS to achieve creative visual and interactive effects without relying on external libraries such as ScrollTrigger or Three.js. The project explores custom animations, dynamic content updates, and responsive designs purely using native web technologies.

## Demo


https://github.com/user-attachments/assets/c3b12861-3891-4d67-ad3c-4b60f24f31e8

## Screenshot
![desktop__1_home](https://github.com/user-attachments/assets/ebe90eba-b29d-4985-8bbf-3f91cebe3def)
![desktop__2_work](https://github.com/user-attachments/assets/5b4d4ce6-3109-4416-9dc1-12ecc64b54d6)
![mobile__montage](https://github.com/user-attachments/assets/d9c78ac5-3a4f-4db8-a3fb-b4ebec8f66bb)

## Features
- Vortex Effect: A continuously rotating vortex of images, generated randomly from an array, simulating a dynamic image carousel.
- Dynamic Profession Text: The profession displayed in the hero section rotates dynamically between various creative professions.
- Scroll-triggered Transitions: Seamless transitions between different sections based on the user's scroll position.
- Grid Thumbnail Gallery: A dynamically generated grid of image thumbnails with alternating positions for a staggered visual effect.
- Responsive Design: Includes responsive navigation menus for both desktop and mobile views.

## Technologies Used
- Vanilla JavaScript: All dynamic behaviors, including animations and event listeners, are handled using plain JavaScript.
- CSS: Custom styles are applied to achieve animations, transitions, and responsive layouts.
- HTML: The structure of the webpage is simple and semantic, providing the foundation for the dynamic elements.


## Getting Started
To get a local copy of the project up and running, follow these steps:

### Prerequisites
- A web Browser that supports modern JavaScript (ES6)
- A text editor (VSCode, Sublime, etc.).

### Instalation
1. Clone the repository
```git clone https://github.com/yourusername/scrolltrigger_vanillajs.git```
2. Navigate to the project directory
```cd scrolltrigger_vanillajs```
3. Run ```npm run dev``` to start server
4. Open your web browser and go to http://localhost:5173

## Folder Structure
```cosmos/
│
├── assets/                # Image assets (logos, vortex slides, etc.)
├── public/                # Public assets including image sources used in animations
├── index.html             # Main HTML file
├── style.css              # CSS file for styling
├── main.js                # Main JavaScript file handling the animations and interactions
└── cursorAnimation.js     # Additional JS for custom cursor effects
```

## Key JavaScript Functions
- createSlide(position): Dynamically creates and appends an image to the vortex container, then removes it after 5 seconds to keep the DOM light.
- createGridThumbnail(columnNumber): Adds images to the thumbnail grid, positioning them in staggered rows to create a dynamic gallery effect.
- trackScroll(): Tracks the scroll position and triggers transitions between sections of the page based on the user’s scrolling behavior.
- switchMobileMenu(): Toggles the mobile navigation menu visibility when the hamburger icon is clicked.

## Future Improvements
- [ ] Adding more interactive elements to the work section.
- [ ] Optimizing animations for smoother performance.
- [ ] Exploring deeper browser API integrations for more creative effects.

## License
This project is open-source and available under the MIT License.
