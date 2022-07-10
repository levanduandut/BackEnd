// var courses = [
//     "JS",
//     "C#",
//     "C++",
//     "Python",
//     "Java"
// ]
var courses = new Array(10);
console.log(courses);
// courses.length = 10;
// for(i = 0; i<= courses.length;++i){
//     console.log(courses[i]);
// }
for(var index in courses){
    console.log(index +" "+  courses[index]);
}