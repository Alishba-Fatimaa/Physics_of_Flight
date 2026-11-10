# The Physics of Flight 
[Live Demo](https://physics-of-flight.netlify.app)

An interactive website exploring the science behind flight, developed using core frontend technologies.A blend of my interest in aerodynamics and frontend development, translating the science of flight into an interactive digital experience.

## Overview

The website presents the fundamental principles of flight through structured content, custom SVG illustrations, and interactive simulations.
It explores Bernoulli's theorem, Newton's Third Law, the four forces of flight, and common misconceptions about aerodynamics.

## Live Demo

Explore the live website: **[The Physics of Flight](https://physics-of-flight.netlify.app)**

## Features

### 1. Interactive Angle of Attack Simulator
- Range slider to adjust the angle of attack.
- Dynamic updates to angle values and lift classifications.
- Real-time wing rotation based on slider input.
- Animated airflow visualization.
- Aerodynamic stall detection with dynamic visual feedback.

### 2. SVG Visualizations
- Custom aircraft illustrations.
- Airflow diagrams showing pressure differences.
- Visual representation of the four forces acting on an aircraft.
- Reusable SVG elements and gradient effects.

### 3. Myth Buster
- Flip cards presenting common misconceptions about flight.
- Click-based card interactions.
- Keyboard support through Enter and Space keys.

## Tech Stack

The project was developed using core frontend technologies, without relying on JavaScript frameworks or external UI libraries.

| Technology | Implementation |
|---|---|
| **HTML5** | Semantic webpage structure, content organization, sections, headings, links, form elements, and range input. |
| **CSS3** | Styling, layouts, visual hierarchy, animations, transitions, and interactive card effects. |
| **Vanilla JavaScript** | DOM manipulation, event handling, conditional logic, dynamic content updates, and interactive functionality. |
| **SVG (Scalable Vector Graphics)** | Custom aircraft illustrations, airflow diagrams, aerodynamic force arrows, shapes, gradients, and reusable vector graphics. |

### Technical Concepts & Implementation

**HTML5**
- Semantic elements including `section`, `article`, and `footer`.
- Element IDs and classes for DOM selection.
- Range input for the angle of attack simulator.
- SVG integration through inline SVG elements.
- Accessibility attributes such as `aria-label` and `role`.

**CSS3**
- Custom layouts and component styling.
- CSS transforms for visual rotation.
- Keyframe-based airflow animations.
- CSS transitions and interactive flip-card effects.
- Class-based styling for dynamic states.
- Responsive viewport configuration.

**Vanilla JavaScript**
- DOM selection using `getElementById()`, `querySelector()`, and `querySelectorAll()`.
- Event handling using `addEventListener()`.
- Dynamic content updates using `textContent`.
- Conditional statements for lift classification and stall detection.
- Iteration using `forEach()`.
- Arrow functions and template literals.
- Dynamic CSS manipulation through `style` and `classList`.
- Keyboard event handling for accessible interactions.

**SVG (Scalable Vector Graphics)**
- Reusable aircraft illustration using SVG `<symbol>` and `<use>`.
- Custom vector shapes using `<path>`, `<polygon>`, `<line>`, and `<ellipse>`.
- Linear gradients for visual detailing.
- Animated and labeled airflow paths.
- Vector-based aerodynamic force illustrations.

## Project Structure

```text
The-Physics-of-Flight/
│
├── index.html       # Webpage structure and content
├── style.css        # Styling, layouts and animations
├── script.js        # functionality
│
└── README.md        
```

## Getting Started

To run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/Alishba-Fatimaa/The-Physics-of-Flight.git
```

2. Open the project folder.
3. Ensure all three files (`index.html`, `style.css`, and `script.js`) are in the same directory.
4. Open `index.html` in your browser.

No additional dependencies or framework installation is required.

## Learning Outcomes

Working on this project helped me explore and apply:

- Core frontend development concepts.
- Practical DOM manipulation using Vanilla JavaScript.
- Event-driven programming and interactive UI behavior.
- Integration of SVG graphics into webpages.
- CSS animations and dynamic visual effects.
- Combining HTML, CSS, and JavaScript to create interactive experiences.

## Author

**Alishba Fatima**

Computer Science Student 

- GitHub: [Alishba-Fatimaa](https://github.com/Alishba-Fatimaa)
- LinkedIn: [Alishba Fatima](https://www.linkedin.com/in/alishba-fatima0509/)

---
