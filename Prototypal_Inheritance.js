// function Person(name)
// {
//     this.name = name;
// }

// Person.prototype.greet= function(){
//     console.log("Hello " + this.name);
// }

// let sandesh= Person("Sandesh");
// sandesh.greet();


// Prototypal Inheritance for Animal

function Animal(name) {
    this.name= name;
}

Animal.prototype.makeSound= function() {
    console.log(`${this.name} makes a sound`);
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed= breed;
}

Dog.prototype= Object.create(Animal.prototype); 

Dog.prototype.constructor= Dog;

Dog.prototype.bark= function(){
    console.log(`${this.name} barks`);
}

let myDog= new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Buddy makes a sound
myDog.bark(); // Buddy barks

