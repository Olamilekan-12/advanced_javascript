// PRIME NUMBER

// function isPrime(n){
//     let isPrime;
//     if(n <= 1){
//         isPrime = false
//         return isPrime
//     }
    
//     for(let i = 2; i < n; i++){
//         for(j = 2; j < n; j++){
//             if(i * j === n){
//                 isPrime = false;
//                 return isPrime;
//             }
//         }

//         isPrime = true
//     }

//     return isPrime
    
// }

function isPrime(n){
    if(n < 2){
        return false
    }
    for(let i = 2; i < n; i++){
    if (n % i === 0){
        return false
    }
}
return true
}


console.log(isPrime(5))
console.log(isPrime(4))
console.log(isPrime(3))
console.log(isPrime(5))
console.log(isPrime(9))
console.log(isPrime(7))