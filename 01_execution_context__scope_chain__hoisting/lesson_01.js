// Execution phase
console.log(a)
//console.log(b) // ReferenceError: Cannot access 'b' before initialization
console.log(sum(2,3))

var a = 10;
let b = 20;
function sum(x, y) {
    return x + y
}

// Scope chain

function outer(){
    let x = 10;
    function inner(){
        console.log(x) // finds x by walking up the scope chain
    }
    inner()
}

outer()