
/**
 * Boolean
 */

var a = 1;
var b = 2;

var result = "A" && "B" && "C";

console.log(result); // IN ra C

result = null && "B" && "C";

console.log(result); // In ra null 

result = null || "B" || "C";

console.log(result); // In ra B

result = "A" || NaN || "C";

console.log(result); // In ra A


// if(a<b){
//     console.log("A<B");
// }
// else{
//     console.log("B>A");
// }