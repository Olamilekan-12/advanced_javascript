// Inheritance — extends and super

// class Vehicle {
//     constructor(wheels){
//         this.wheels = wheels
//     }

//     describe(){
//         console.log(`This vehicle has ${this.wheels} wheels`);
//     }
// }


// class Car extends Vehicle {
//     constructor(wheels, brand){
//         super(wheels);
//         this.brand = brand
//     }

//     describe(){
//         // super.describe();
//         console.log(`Testing new describe!!!`)
//     }

//     honk(){
//         console.log(`${this.brand} says beep!!`)
//     }
// }

// const myCar = new Car(4, "Volvo")
// myCar.describe();
// myCar.honk()


// class Animal {
//     #name
//     constructor(name){
//         this.#name = name;
//     }

//     #isValidSound(sound){
//         return (sound !== "" && typeof sound === "string");
//     }

//     getName(){
//         return this.#name
//     }

//     makeSound(sound){
//         if(!this.#isValidSound(sound)){
//             console.log("Invalid sound");
//             return false
//         }
//         console.log(`${this.#name} makes a sound - ${sound}`);
//         return true
//     }
// }

// class Dog extends Animal {
//     #breed
//     constructor(name, breed){
//         super(name);
//         this.#breed = breed
//     }
//     bark(sound){
//        const validSound =  super.makeSound(sound);
//        if(validSound){
//            console.log(`${this.getName()} barks and it's of breed ${this.#breed} with sound ${sound}`)
//        }
//     }
// }

// const myDog = new Dog("Max", "boerboel");
// myDog.makeSound("woof")
// myDog.bark("woof woof")

// class BankAccount {
//     #balance;
//     constructor(initialBalance){
//         this.#balance = initialBalance;
//     }

//     #isValidAmount(amount){
//         return amount > 0;
//     }

//     deposit(amount){
//         if(!this.#isValidAmount){
//             console.log("Invalid deposit amount");
//             return;
//         }
//         this.#balance = this.#balance + amount;
//         console.log(`Balance: ${this.#balance}`);
//     }

//     getBalance(){
//         return this.#balance;
//     }
// }

// const account = new BankAccount(100);
// account.deposit(50);
// console.log(account.getBalance());


// class Animal {
//     makeSound(){
//         throw new Error("makeSound() must be implemented by subclass")
//     }
// }

// class Dog extends Animal {
//     makeSound(){
//         console.log("woof!")
//     }
// }
// class Fish extends Animal {
 
// }

// const fish = new Fish();
// fish.makeSound(); 

class Shape {
    area(){
        throw new Error("area() must be implemented");
    }

    describe(){
        console.log(`This shape has an area of ${this.area()}`)
    }
}

class Circle extends Shape {
    
    constructor(radius){
        super();
        this.radius = radius
    }
    area(){
        return Math.PI * this.radius ** 2
    }
}

class Rectangle extends Shape {
        constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height
    }
}

const shapes = [new Circle(50), new Rectangle(300, 50)]

for(const shape of shapes){
    shape.describe();
}