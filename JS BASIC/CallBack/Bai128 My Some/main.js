var courses = [
    {
        
        name: "JS",
        coin: 30,
        isFinish: false,
    },
    {
        
        name: "C#",
        coin: 0,
        isFinish: false,
    },
    {
        
        name: "C++",
        coin: 0,
        isFinish: false,
    },
    {
        
        name: "C",
        coin: 0,
        isFinish: false,
    },
    {
        
        name: "Dart",
        coin: 310,
        isFinish: false,
    },
    {
        
        name: "Fluter",
        coin: 310,
        isFinish: false,
    }
]

Array.prototype.some2 = function(cb){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index], index, this);
            if(result){
                return true;
            }
            
        }
    }
    return false;
}
var kq = courses.some2(function(course, index, array){
    return course.isFinish;
});
console.log(kq);