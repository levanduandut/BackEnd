var courses = [
    {
        
        name: "JS",
        coin: 30,
        isFinish: true,
    },
    {
        
        name: "C#",
        coin: 0,
        isFinish: true,
    },
    {
        
        name: "C++",
        coin: 0,
        isFinish: true,
    },
    {
        
        name: "C",
        coin: 0,
        isFinish: true,
    },
    {
        
        name: "Dart",
        coin: 310,
        isFinish: true,
    },
    {
        
        name: "Fluter",
        coin: 310,
        isFinish: true,
    }
]

Array.prototype.every2 = function(cb){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index], index, this);
            if(result == false){
                return false;
            }
            
        }
    }
    return true;
}
var kq = courses.every2(function(course, index, array){
    return course.isFinish;
});
console.log(kq);