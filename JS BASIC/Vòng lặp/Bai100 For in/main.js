// var myInfo = {
//     name: "Le Duan",
//     age : 18,
//     addresss: 'VN'
// };
// for(var key in  myInfo){
//     console.log(myInfo[key]);
// }


// var ar = [
//     "JS",
//     "C",
//     "JV"
// ]

// for(var key in ar){
//     console.log(ar[key])
// }
function run(object) {
    var arr = [];
    var count =0; 
    for(var key in object){
        arr[count] = "Thuộc tính "+ key + " có giá trị "+ object[key];
        count++;
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output: