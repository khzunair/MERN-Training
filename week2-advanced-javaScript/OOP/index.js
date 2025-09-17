

class Car{
    constructor(make, model){
        this.make  = make 
        this.model = model 
    }
}

const car1 = new Car("Ford","Mustang")

console.log(car1)



// The map() method creates a new array by applying a function to each element of the original array.
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(number => number*2)
console.log(doubledNumbers)


const ages = [16, 22, 18, 15, 30];
const adults = ages.filter(age => age >= 18)
console.log("The adults are :", adults)


const number_list = [1, 2, 3, 4];
const sum = number_list.reduce((accumlator, currentValue)=> currentValue+ accumlator, 0)
console.log(sum)


const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const userFound = users.find(user => user.id === 3);

console.log(userFound);

// some
const scores = [12,33,90,23]
const isScoreGreaterThan90 = scores.some(score => score >=90)
console.log(isScoreGreaterThan90)


const products = [
  { name: 'apple', price: 1 },
  { name: 'orange', price: 0.5 },
  { name: 'banana', price: 2 }
];

const allPriced = products.every(product => product.price > 0);
console.log(allPriced)


// Prototypes
const person = {
  isHuman: true,
  greet() {
    return `Hello, I am ${this.name}`;
  }
};



const user2 = Object.create(person);
user2.name = 'Alice';
user2.age = 25;

console.log(user2.isHuman);
console.log(user2.greet());  





// Inheritence
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

// Child Constructor
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

// Inherit the prototype methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Correctly set the constructor

Dog.prototype.speak = function() {
  console.log(`${this.name} barks!`); // Override the parent method
};

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); 



// Object Oriented Programming
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);  // Output: "Deposited: $100. New balance: $100"
console.log(account.getBalance()); // Output: 100
// console.log(account.#balance); // This would cause a SyntaxError

class Animal {
    #name = ''; // The private field to store the name

    constructor(name) {
        this.#name = name; // Correctly assign the name to the private field
    }
    
    getName() {
        return this.#name; // This now correctly returns the name
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent constructor to set the name
        this.breed = breed;
    }
    
    speak() {
        // Accessing the name through a public getter method from the parent class
        console.log(`${this.getName()} barks!`); 
    }
}


class Cat extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent constructor to set the name
        this.breed = breed;
    }
    
    speak() {
        // Accessing the name through a public getter method from the parent class
        console.log(`${this.getName()} meows!`); 
    }
}

const anima = new Animal("Lion");
const dog = new Dog("Buddy", "Golden Retriever"); 
const cat = new Cat("Tom", "Turkish")
console.log(anima.getName()); // Output: Lion
dog.speak();         
cat.speak()