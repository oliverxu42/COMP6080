# Week 7

Hi everyone! Welcome to back to week 7!

### 📢 Updates & Reminders

- Assignment 3 due Friday Week 7, 10pm! Good Friday public holiday -> Special Consideration
- Assignment 4 Pair/Individual Form -> MUST COMPLETE!

### Today...

🔎 Accessibility + UI

🛠️ React Introduction

## Accessibility

What is accessibility and why should we care about it?

> Web Content Accessibility Guidelines (WCAG): https://www.w3.org/TR/WCAG20/

1. Perceivability:
   - Text alternatives to non-text content e.g. alt text
   - Text must be legible with sufficient contrast.
2. Operability:
   - Page actions should support keyboard interactions
   - Aria labels
   - Give sufficient time for action items
3. Understandability:
   - Labels for input fields
   - Specific error messages
   - Aria roles
4. Robustness:
   - Use good html practices

Accessibility tools:

- Screen readers
- Lighthouse

1. See `ally-find-poor-accessibility`

## Good UI

What is the difference between User Experience (UX) and User Interface (UI)?

1. Basic Visual Design Principles (ensuring users aren't scared)

   - Alignment: use grids
   - Fonts: consistent, at most 2 font families
   - Colours: pick colours that work well together

2. Visual Hierarchy (making it easier to find things)

   - Size (bigger means important)
   - Color (brighter means important)
   - Contrast (contrasting things draw attention)
   - Spacing (big margins create importance)
   - Alignment (misaligned things draw attention)
   - Repetition (puts things on the same level)

3. Affordances (making it easier to do things)
   - Visual properties of an element that let users know they can do something with it
   - Make possible interactions obvious
   - Avoid false affordances

Examples:

- https://arngren.net/
- https://www.apple.com/au/
- https://moodle.telt.unsw.edu.au/

## React Intro

> React is a javascript framework for building user interfaces based on components. https://react.dev/

### Getting Started

To create a React app, use the following command `npx create-react-app [your app name]`

Next, `cd` into the folder that was created and run `npm start` to start up your app.
