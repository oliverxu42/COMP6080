# Week 3

Hello, Welcome to Week 3! Especially to those from the other tutorial stream :)

### 📢 Updates & Reminders

- Assignment 1 due Friday Week 3 (Today!) at 10pm
- Help session Friday 6-8pm
- Assignment 2 will be released soon (Javascript)!

### Today...

🛠️ Javascript

🖥️ DOM + Dynamic Webpages

## Javascript

- Basic syntax: Variables, Conditionals, Printing
- Arrays & Loops
- Objects
- Functions

See `1.Javascript/basics.js`

## DOM

> The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web (https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

- The DOM is a programming interface, represented as a tree of node and objects.

**Reading the DOM**:

```Javascript
// Returns an html element with the given id
document.getElementById(id);

// Returns a DOM HTMLCollection of all matches
document.getElementsByTagName(name);
document.getElementsByClassName(className);

// Returns the first element that matches the selector
document.querySelector(query);
```

**Manipulating the DOM**:

```Javascript
// Creating a new div element
const newDiv = document.createElement("div");

// Add some style to the div
newDiv.style.background = "red";

// Create a new text node
const text = document.createTextNode("hello there");

// Add the text node to the new div
newDiv.appendChild(text);

// Grab the body element
const body = document.getElementById("body");

// Add the new div to the body
body.appendChild(newDiv);
```

**Event Listeners**:

```js
const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  alert('Button was clicked');
});
```

Demo! See: `2.DOM-example`
