/**
 1. To String
 2. Join
 3. Pop 
 4. Push
 5. Shift
 6. Unshift
 7. Splicing
 8. Con cat
 9. Slicing

 */
// var languages = [
//   "JS",
//   "PHP",
//   "Ruby"
// ];

// console.log(languages.toString())
// console.log(languages.join(" - "))
// console.log(languages.pop()) //Xoa element cuoi mang va tra ve phan tu da xoa

// console.log(languages.push("C#", "Dart"))

// console.log(languages.shift()) //Xoa element dau mang va tra ve phan tu da xoa
// console.log(languages)

// console.log(languages.unshift("Hello")) // Thêm đầu mảng
// console.log(languages)
// languages.splice()
// console.log(languages)
function joinWithCharacter(array, charactor) {
  return cars[0] + charactor + cars[1] + charactor + cars[2];
}


// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"