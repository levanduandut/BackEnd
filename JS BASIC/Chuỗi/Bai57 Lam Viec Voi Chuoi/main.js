var myString = "Le Van Duan";
//1. Length
// console.log(myString.length)

//2. Find Index
// console.log(myString.lastIndexOf("a"))
// console.log(myString.indexOf("a"))
// console.log(myString.indexOf("a",6))
// console.log(myString.search("a"))

//3. Cut String
// console.log(myString.slice(4, 7)); an
// console.log(myString.slice(-3, -1)); ua

//4. Replace
// console.log(myString.replace("Duan", "Duy Khoa"))
// console.log(myString.replace(/Duan/g, "Duy Khoa"))

//5. To Upper
// console.log(myString.toUpperCase())

//6. To lower
// console.log(myString.toLowerCase())

//7. Trim
//Loai bo khoang trang hai dau

//8. Split
//Cat chuoi thanh arrray
// var language = 'JS, PHP, Ruby';
// console.log(language.split(', '))
// console.log(myString.split(''))

//9. Get a character by index
// console.log(myString.charAt(0));
// console.log(myString[3]);
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    var ar = str.split(',');
    
    console.log(ar);
    return ar;
}

// Expected results
strToArray(coursesStr) 