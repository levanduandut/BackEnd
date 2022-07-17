// var boxElement = document.querySelector(".box");

// console.log(boxElement);

// boxElement.innerHTML = "<h1 title ='heading'> Hello </h1>";

// console.log(document.querySelector("h1").innerText);

// console.log(boxElement.innerHTML);
// console.log(boxElement.outerHTML);

// boxElement.outerHTML = "<span>Test</span>"

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ulElement = document.querySelector(".courses-list");
    var html = ""
    for(var i= 0; i<courses.length;i++){
        html += `<li>${courses[i]} </li>`;
    }
    console.log(html);
    ulElement.innerHTML = html;
    
}
render(courses);
