// this Binding — The Rule Everyone Gets Wrong

// Default binding — plain function call
function show(){
    console.log(this)
}
show(); // non-strict: global object (window). strict mode: undefined


//Implicit binding — called as a method on an object
const user = {
    name : "Blessing",
    greet() {
        console.log(this.name);
    }
}

user.greet() // "Blessing" — this = the object left of the dot


// Explicit binding — call, apply, bind force this
function greet(){
    console.log(this.name)
}

const person = {
    name : "Blessing"
}

greet.call(person)
greet.apply(person)
const bound = greet.bind(person)
bound()

// new binding — highest priority, wins over everything

function Person(name){
    this.name = name
}

const p = new Person("Blessing");
console.log(p.name)


class Counter {
  count = 0;
  increment() {
    this.count++;
    console.log(this.count);
  }
}

const c = new Counter();
const standalone = c.increment;
standalone();