// Memoization — closures doing real work

// function slowSquare(n){
//     console.log("Computing...");
//     for(let i = 0; i < 1000000000; i++){ // Pretend this is expensive.

//     }
//     return n * n;
// }

// slowSquare(5)
// slowSquare(5)

// function memoise(fn){
//     const cache = {};

//     return function(n){
//         if(cache[n] !== undefined){
//         console.log(`From cache...`)
//         return cache[n]
//     }
//         const result = fn(n)
//         cache[n] = result;
//         return result;
//     }
// }

// const fastSquare = memoise(slowSquare)
// fastSquare(5)
// fastSquare(5)
// fastSquare(6)
// fastSquare(5)

function addValuesSlowly(a,b){
    for (let index = 0; index < 1000000000; index++) {
    }
    return a + b;
}

function memoise(fn){
    const cache = {};

    return function(a, b){
        if(cache[`${a}-${b}`] !== undefined){
            console.log(`from cache...`)
            return cache[`${a}-${b}`]
        }

        const result = fn(a,b)
        console.log(`recalculating...`)
        cache[`${a}-${b}`] = result;
        return result
    }
}

const addValueFast  = memoise(addValuesSlowly)


addValueFast(2,5)
addValueFast(5,5)
addValueFast(5,5)


