var date = new Date();

console.log(date);

var year = date.getFullYear();
var month = date.getUTCMonth() + 1;
var day = date.getUTCDate();

console.log(`${day} ${month} ${year}`);