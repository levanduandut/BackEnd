const numbers = [1,2,3,4,5];
const result = numbers.reduce((total,number, index, array) => {
    return total + number
})

console.log(result);