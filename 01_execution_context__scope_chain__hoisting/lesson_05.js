// Prototypes & Prototypal Inheritance

// const animal = {
//     eats : true,
//     walk() {
//         console.log("Animal walks")
//     }
// }

// const dog = {
//     bark : true
// }

// dog.__proto__ = animal

// console.log(dog.bark);
// console.log(dog.eats);
// dog.walk();

// const arr = [1,2,3];
// arr.push(4);
// arr.map((x) => x * 2);

// console.log(arr.__proto__ == Array.prototype)

// const animal = {
//     eats : true,
//     walk(){
//         console.log(`${this.name} walks`)
//     }
// }

// const dog = Object.create(animal);
// dog.name = "Rex";
// dog.bark = true;

// console.log(dog.eats)
// dog.walk()


// const vehicle = {
//     wheels : 4,
//     describe(){
//         console.log(`This vehicle has ${this.wheels} wheels`)
//     }
// }

// const car = Object.create(vehicle)
// car.wheels = 6;

// car.describe()

class Vehicle {
    constructor(wheels){
        this.wheels = wheels
    }

    describe(){
        console.log(`This vehicle has ${this.wheels} wheels`)
    }
}

const car = new Vehicle(4)
car.describe()