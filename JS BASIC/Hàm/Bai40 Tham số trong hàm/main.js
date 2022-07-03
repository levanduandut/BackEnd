
/**
1. Tham số ?

2. Truyền tham số

3. Arguments ?

*/

function writeLog(message, name){
   console.log(message );
   console.log(name);
}
writeLog("Hello ", "Oanh");

function testLog(){
   var myString = " ";
   for (var param of arguments){
      myString  +=  `${param}  _ `   
   }
   console.log(myString);
};
testLog("Duan", "Oanh", "hehe", "Hihi")