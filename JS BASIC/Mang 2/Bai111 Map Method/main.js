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

function courseHandler(course, index, oring){
    // return {
    //     id: course.id,
    //     name: `Khoa hoc ${course.name}`,
    //     index: index,
    //     oring: oring,
    // };
    return course.name;

}
var hi = courses.map(courseHandler);
console.log(hi);