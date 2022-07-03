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

// var titleCoin = 0;
// for (var course of courses){
//     titleCoin += course.coin;
// }
// console.log(titleCoin);
var i = 1;
function Test(acc,curValue,curIndex,oring){ 
    i++;
    console.table({
        'table':i,
        'Bien tich tru': acc,
    })
}
var red = courses.reduce(Test,0);
