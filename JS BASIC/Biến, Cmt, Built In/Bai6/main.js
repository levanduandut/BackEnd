/**
1. Tọa mảng
  - Cách tạo
  - Sử dụng các nào , tại sao 
  - kiểm tra data typeof
2. Truy xuất mảng
  - Độ dài mảng
  - Láy phần tử theo index

 */

var languages = [
    "JS",
    "C#",
    "C++",
    "PHP",
    3,
    4.3,
    undefined,
    function name(params) {
        
    },
    {},
    null
];
// var languages = new Array("JS",
// "C#",
// "C++",
// "PHP",
// 3,
// 4.3,
// undefined,
// function name(params) {
    
// },
// {},
// null)

console.log(typeof languages)
console.log(Array.isArray(languages))
console.log(languages.length)
console.log(languages[3])