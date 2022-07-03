// var User= function(firstName, lastName, avatar){
function User(firstName, lastName, avatar){
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function() {
    return `${this.firstName} ${this.lastName}`;
  }

}

User.prototype.className = "F8";
User.prototype.getClassName = function(){
  return this.className;
}

var author =  new User("Le", "Van", "AVT");
var user =  new User("Oanh", "Nguyen", "AVTA");

author.title = "HEHEHEHE";
user.comment = "HIHIHIHI 🤣";

// console.log(author.getName());
// console.log(user.getName());

console.log(user.className);
console.log(author.getClassName())

