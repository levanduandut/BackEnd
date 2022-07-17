
var headingElement = document.querySelector('.heading');

console.log(headingElement.innerText);
console.log(headingElement.textContent);

headingElement.innerText = "New heading";

/**
 * innerText vs TextContent
 * innerText : Lay ca nhin thay
 * textContent: Lay ca TextNode
 * 
 */
