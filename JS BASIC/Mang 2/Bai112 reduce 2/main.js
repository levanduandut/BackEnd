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

var i = 1;
function Test(acc,curValue,curIndex,oring){ 
    i++;
    console.table({
        'table':i,
        'Bien tich tru': acc,
    })
}
var red = courses.reduce(Test,0);
