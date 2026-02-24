## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

`getElementById()`: It returns a single element using unique ID. If a page a has same ID multiple times then it will return the first one only.

`getElementsByClassName()`: It returns a live HTMLCollection and matches all elements with a specific class.  

`querySelector()`: It returns the first matching element with any CSS selector such as class, id, tag.  

`querySelectorAll()`: It returns a static NodeList and matches all elements using using CSS Selectors such as class, id, tag.

---

## 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM, first i will create an element then add or modify the content and finaly insert the new element into the DOM.  

**Example:**  

```js
const newDiv = document.createElement('div'); // created an element
newDiv.innerText = 'Hello DOM'; // added text
document.body.appendChild(newDiv); // insert into DOM
```

---

## 3. What is Event Bubbling? And how does it work?

Event bubbling is a process where events bubble up from the target element to its ancestors.

Suppose, I clicked a button. The click event moves to the parent div of that button, then move to the body and finally it reach the document and window.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation in JavaScript is a technique where a parent element handles events of child elements using event bubbling.  

Event delegation is useful because it reduces the number of event listeners, boost performance, make code cleaner. It is best for dynamically added elements.

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

`preventDefault()` stops browser's default behavior, while `stopPropagation()` stops event from bubbling to parent elements.