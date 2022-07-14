function Cal(a,b,cb){
    return cb(a, b);
}
function Cong(a,b){
    return a +b;
}
function Tru(a,b){
    return a - b;
}
function Nhan(a,b){
    return a * b;
}
function Chia(a,b){
    return a / b;
}
console.log(Cal(2,3,Cong));