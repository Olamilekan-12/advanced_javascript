// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// const counter = outer();
// counter() // 1
// counter() // 2
// counter() // 3

// function createBankAccount(initialBalance) {
//   let balance = initialBalance; // trapped inside the closure — no outside code can touch it directly

//   return {
//         deposit(amount) {
//         balance += amount;
//         console.log(`Balance: ${balance}`);
//         },
//         withdraw(amount) {
//         if (amount > balance) {
//             console.log("Insufficient funds");
//             return;
//         }
//         balance -= amount;
//         console.log(`Balance: ${balance}`);
//         },
//         getBalance() {
//         return balance;
//         }
//   };
// }

// const account = createBankAccount(100);
// account.deposit(50);   // Balance: 150
// account.withdraw(30);  // Balance: 120
// const bal =  account.getBalance()
// console.log("balance",bal)
// console.log(account.balance); // undefined — can't reach it directly!

// function createCounter(start){
//     let counter = start;

//     return {
//         increment(){
//             counter = counter + 1
//             console.log(counter)
//         },
//         decrement(){
//             counter = counter - 1
//             console.log(counter)
//         },
//         reset(){
//             counter = start;
//             console.log(counter);
//         }
//     }
// }

// const result = createCounter(0);
// result.increment()
// result.increment()
// result.increment()
// result.decrement()
// result.reset()

function createFunctions() {
  var funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function() {
      console.log(i);
    });
  }
  return funcs;
}

const fns = createFunctions();
fns[0]();
fns[1]();
fns[2]();