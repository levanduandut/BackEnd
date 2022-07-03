
/**
1. Dữ liệu nguyên thủy - Primittive Data
  Number
  String
  Boolean
  Undefined  Khai bao bien ko gán giá trị
  Null
  Symbol var id = Symbol("id");
2. Dữ liệu phúc tạp
  Function
  Object
 */

var myFunction = function(){
    alert("Hi, xin chao cac ban !")
}
myFunction();

//Object type
var myObject = {
    name : "Le Duan",
    age : 19,
    address : "Ha Noi",
    myFunction1 : function () {
        
    }
};
console.log("myObject", myObject);

var myArray = [
    "Java",
    "C",
    "Ruby",
];
console.log(myArray)

