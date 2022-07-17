/**
 * DOM Attribute
 */
var headingElement = document.querySelector('h1');
headingElement.title = "Heading";
// headingElement.className = "heading";

var aElement = document.querySelector('a');
aElement.href ="https://www.facebook.com/";

console.log(headingElement);

headingElement.setAttribute('class','heading')
headingElement.setAttribute('href','https://www.facebook.com/')
var heading2Element = document.querySelector('h2');
console.log(heading2Element.getAttribute('class'));


