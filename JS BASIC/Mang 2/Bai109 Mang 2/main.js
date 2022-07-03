/**
 * Methods
 *    forEach
 *    every
 *    some
 *    find
 *    filter
 *    map
 *    reduce
 */

var courses = [
    {
        id: 1,
        name: "JS",
        coin: 30
    },
    {
        id: 2,
        name: "C#",
        coin: 0
    },
    {
        id: 3,
        name: "C++",
        coin: 0
    },
    {
        id: 4,
        name: "C",
        coin: 0
    },
    {
        id: 5,
        name: "Dart",
        coin: 310
    },
    {
        id: 5,
        name: "Fluter",
        coin: 310
    }
]

courses.forEach(function (course, index){
    console.log(index,course);
});

var isFree = courses.every(function (course, index){
    return course.coin === 0; // false
});
console.log(isFree);

courses.some(function (course, index){
    return course.coin === 0; // true
});

var fin = courses.find(function (course, index){
    return course.name === "C"; // true
});
console.log(fin); //{id: 4, name: 'C', coin: 0}

var filt = courses.filter(function (course, index){
    return course.id === 5; // true
});
console.log(filt); // find all