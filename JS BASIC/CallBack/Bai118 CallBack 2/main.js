// Là hàm
// Truyền qua đối số
// Đc gọi lại (trong hàm nhận đối số)

var courses = [
    "JS",
    "C#",
    "JAVA",
    "Python",
    "C++",
    "Dart"

];

// function myfunction(course){
//     return `<h1>${course}</h1>`
// };

// var htmls = courses.map2(myfunction);
// console.log(htmls.join(' '))

Array.prototype.map2 = function(callBack){
    var output =[];

    for(var i = 0;i<this.length;i++){
        var result = callBack(this[i],i);
        output.push(result)
    }
    return output;
}

courses.map2(function(value, index){
    console.log(index, value)
})

var htmls = courses.map2(function(course){
    return `<h1>${course}</h1>`;
});
console.log(htmls.join(' '))

