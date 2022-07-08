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
// var i =0;

// var totalcoin = courses.reduce(function(total,course){
//     i++;
//     // console.log(i, total, course);
//     return total + course.coin;
// },0); // intial value
// console.log(totalcoin);

var numbers = [100,200,300,400];

var totalcoin = numbers.reduce(function(total, number){
    return total + number;
});

console.log(totalcoin);


var deptArrray = [1,2,[3,4], 5,6,[7,8,9]];
var flatArray = deptArrray.reduce(function(flatOutPut, deptItem){
    return flatOutPut.concat(deptItem);
},[]);

console.log(flatArray);

var topics = [
    {
        topic: "Frontend",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ]
    },
    {
        topic: "Bachend",
        courses: [
            {
                id: 1,
                title: "Nodejs"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ]
    }
]

var newCourses = topics.reduce(function(course, topic){
    return course.concat(topic.courses);
},[])

console.log(newCourses);