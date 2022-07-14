var courses = [
    "JS",
    "C#",
    "JAVA"
]
// var courses  = new Array(100);
Array.prototype.forEach2 = function(callback){
    for(var index in this ){
        if(this.hasOwnProperty(index) == true){
            // console.log(index);
            callback(this[index], index, this)
        }
    }
}
courses.forEach2(function(course, index, array){
    console.log(course, index, array);
});