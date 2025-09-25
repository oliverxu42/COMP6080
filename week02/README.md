# Week 2

Hello! Welcome to Week 2!

How are we feeling? Biggest worries/fears about the course?

### 📢 Updates & Reminders

- Assignment 1 due Friday Week 3 at 8pm!
- Help sessions available see: https://cgi.cse.unsw.edu.au/~cs6080/25T3/timetable/help-sessions

### Today...

📦 Flexbox

🛠️ Responsiveness + Mobile CSS

## Flexbox

Useful links:

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://flexboxfroggy.com/

> A flex layout gives the container the ability to alter its items’ width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.

![flex](assets/flex.svg)

See demo! 1.flexbox

## Responsiveness + Mobile CSS

### Viewport & CSS Units

**Viewport:** represents the currently viewable area of the page

**Absolute Lengths**:

- Are based on an actual physical unit e.g. px, pt
- In CSS, 1 pixel is defined as 1/96 of an inch and high resolution screens display multiple
  physical pixels per CSS pixels.
- Absolute length units not recommended since screen sizes vary so much.

**Relative Lengths**

- Specify a length relative to another property, not dependant on screen size.
- `em` relative to the font-size of the element.
- `rem` relative to the font-size of the root element.
- `vw` relative to 1% of the width of the viewport.
- `vh` relative to 1% of the height of the viewport.
- `%` relative to the parent element.

```css
h1 {
  font-size: 2em; /* 2x the font-size of the current element */
}

h2 {
  font-size: 20vw; /* 20% of the viewport width */
}
```

### Media Queries

Allows CSS rules to apply to elements only when the device reaches a specific condition.

```css
.container {
  padding: 10px;
}
/* Applies these styles if the viewport is 600px wide or wider */
@media (min-width: 600px) {
  .container {
    padding: 100px;
  }
}
```

Demo! 2.mobile
