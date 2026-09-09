// Value vs Reference — Why This Matters Before We Build Data Structures

// Primitives (number, string, boolean, undefined, null, symbol, bigint) are stored by value — copied fully, every time.

let a  = 5;
let b = a;

b = 10;

console.log(a)
console.log(b)

// Objects (including arrays, and functions) are stored by reference — the variable doesn't hold the object itself, it holds a pointer to where the object lives in memory.

let obj1 = {
    count : 5
}

let obj2 = obj1

obj2.count = 10;

console.log(obj1.count)