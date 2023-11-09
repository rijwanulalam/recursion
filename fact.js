// function factorial(num){
//     let fact = 1;
//     for(let i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// const result = factorial(4);
// console.log(result);

function factorial(num){
    if(num == 1){
        return 1
    }
    return num * factorial(num - 1)
}

const result = factorial(4);
console.log(result);