# myCalcApp
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Build a calculator app using Vanilla JS, CSS3 and HTML5. Build dark-mode for app.
  - use classes and constructor
  - use Number.methods
  - use data-attributes
  - use switch cases
  - Apply darkMode to all CSS element
  - use class constructors to organize calculator variables and functions


### Links

- Live Site URL: [vercel.app](https://my-calc-app-o184e040j-christopherrc819.vercel.app/)
- gitHub URL: [gitHub](https://github.com/christopherrc819/myCalcApp)

## My process

### Built with

Used data-attributes to separate JS and CSS selectors.

- Vanilla JavaScript
- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned
**parseFloat() included entire integer after decimal, parseInt() removes anything after decimal**
```js
const prevValue = parseFloat(this.previousOperand);
const currentValue = parseFloat(this.currentOperand);
```
**isNan() method**
```js
if (isNan(floatNumber)) return
```
**Simple dark and light Mode using classList.add/remove, and style; will use classList.toggle to add dark style classes.**
```js
lightModeBtn.addEventListener('click', () => {
  console.log('lightModeBtn clicked');
  calcBackground.style.backgroundColor = '#ffffff';
  body.style.backgroundColor = '#ebebeb';
  darkModeSection.classList.remove('darkModeClrForeground');
  darkModeSection.classList.add('lightModeClrForeground');
  previousOperandElement.style.color = 'black';
  currentOperandElement.style.color = 'black';
  numberBtns.forEach(element => element.style.color = 'black');
  elementBtns.forEach(element => element.classList.remove('darkModeClrForeground'));
  elementBtns.forEach(element => element.classList.add('lightModeClrForeground'));
})
darkModeBtn.addEventListener('click', () => {
  calcBackground.style.backgroundColor = '#202020';
  body.style.backgroundColor = '#333333';
  previousOperandElement.style.color = 'white';
  currentOperandElement.style.color = 'white';
  darkModeSection.classList.remove('lightModeClrForeground');
  darkModeSection.classList.add('darkModeClrForeground');
  numberBtns.forEach(element => element.style.color = 'white');
  elementBtns.forEach(element => element.classList.remove('lightModeClrForeground'))
  elementBtns.forEach(element => element.classList.add('darkModeClrForeground'))
  console.log('darkModeBtn clicked');
})
```
**string.slice()**
```js
this.currentOperand = this.currentOperand.toString().slice(0, -1);
```
**.toLocaleString(), add commas**
```js
integerDisplay =  integerDigits.toLocaleString('en', {
  maximumFractionDigits: 0})
```
**concat variables using template literals**
```js
`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
```
**used forEach() to apply CSS classes and addEventListeners to elements on HTML**
```js
numberBtns.forEach(element => element.style.color = 'white');
elementBtns.forEach(element => element.classList.remove('lightModeClrForeground'))
elementBtns.forEach(element => element.classList.add('darkModeClrForeground'))
```
### Continued development

- JS Concepts
- classes


### Useful resources

- [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) - Helped me understand template literals and back ticks.
- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) - Helped me understand align-content CSS.
- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - This helped me understand data attributes in regards to accessing html elements from JS.
- [Youtube](https://www.youtube.com/watch?v=0XprLgghq9g) - Back Ticks and Templating
- [stackOverFlow.com](https://stackoverflow.com/a/56047662/14445088) - Helped me understand adding classes to all elements in an array. Must be iterated on each element using forEach method.

## Author

- Website - [Chris](https://christopherrc819.github.io/)
