// Ví dụ dùng đệ quy để giải bài tập ở đầu Video
// var array = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
// var newArray = [];

// function loop(start, end, callback) {
//     if (start < end) {
//         callback(start);
//         return loop(start + 1, end, callback);
//     } else return newArray;
// };
// loop(0, array.length, function(index) {
//     if (array.indexOf(array[index], index + 1) === -1) {
//         newArray.push(array[index]);
//     }
// });
// console.log(newArray)


function giaiThua(n){
    if(n > 0){
        return giaiThua(n-1)*n;
    }

    return 1;
};

console.log(giaiThua(10));