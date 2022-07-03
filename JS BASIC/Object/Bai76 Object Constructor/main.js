// var User= function(firstName, lastName, avatar){
function User(firstName, lastName, avatar){
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function() {
    return `${this.firstName} ${this.lastName}`;
  }

}

var author =  new User("Le", "Van", "AVT");
var user =  new User("Oanh", "Nguyen", "AVTA");

author.title = "HEHEHEHE";
user.comment = "HIHIHIHI 🤣";

console.log(author.getName());
console.log(user.getName());

