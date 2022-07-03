/**
 * Object
 */
var emailKey = 'email';

var myInfo = {
  name: "Le Duan",
  age: 18,
  address : "Da Nang, Viet Nam",
  // 'ho': 'le',
  // myKey: 123
  [emailKey]: 'fbsinon300101@gmail.com',

  getName: function(){
    return this.name;
  }
};

//funciton : Phuong thuc method
//Others : Thuoc tinh property
delete myInfo.age;
var myKey = 'address';

// myInfo['myemail'] = 'fbsinon300101@gmail.com'
// myInfo.email = 'fbsinon300101@gmail.com'
// console.log(myInfo);
// console.log(myInfo.myKey) // 123
// console.log(myInfo[myKey])  // Da Nang, Viet Nam
console.log(myInfo.getName());
//function muon chay them ()