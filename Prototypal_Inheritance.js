function Person(name)
{
    this.name = name;
}

Person.prototype.greet= function(){
    console.log("Hello " + this.name);
}

let sandesh= Person("Sandesh");
sandesh.greet();