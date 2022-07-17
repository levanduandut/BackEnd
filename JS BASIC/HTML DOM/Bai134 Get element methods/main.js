/**
 * Get Element : ID, class,tag
 */

var gx = document.getElementsByClassName('heading');
console.log(gx);

var ta = document.getElementsByTagName('p');
console.log(ta);

var que = document.querySelector('.box .heading-2:first-child');
console.log(que);

var all = document.querySelectorAll('.box .heading-2')
console.log(all[1]);

console.log(document.forms.textform);
console.log(document.anchors);

