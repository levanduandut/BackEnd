// var courses = [
//     {
        
//         name: "JS",
//         coin: 30
//     },
//     {
        
//         name: "C#",
//         coin: 0
//     },
//     {
        
//         name: "C++",
//         coin: 0
//     },
//     {
        
//         name: "C",
//         coin: 0
//     },
//     {
        
//         name: "Dart",
//         coin: 310
//     },
//     {
        
//         name: "Fluter",
//         coin: 310
//     }
// ]
const courses = [1, 2, 3, 4];

Array.prototype.filter2 = function(cb){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            // console.log(index);
            var result = cb(this[index], index, this);
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}

var fun = courses.filter(function(vlu, index, array){
    // console.log(vlu,index,array);
    return array.length %2 === 0;
});
console.log(fun);

