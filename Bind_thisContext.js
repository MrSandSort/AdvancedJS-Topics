const person={
    name:"Sandesh",
    greet(){
        console.log(`Hi, I am ${this.name}`);
    },
};

person.greet();

const greetFunction= person.greet
greetFunction();

const boundGreet= person.greet.bind({name:"SANDY"});

boundGreet();