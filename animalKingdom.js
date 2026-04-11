// Build an Animal base class and two subclasses that override the sound method.

// Requirements:

// Animal class: name, age; method speak() returns 'Some animal sound'
// Dog extends Animal: overrides speak() to return 'Woof!'
// Cat extends Animal: overrides speak() to return 'Meow!'
// Both subclasses add a fetch() or purr() method unique to them
// Use super(name, age) in subclass constructors

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return "Some animal sound";
    }
}

class Dog extends Animal{
    constructor(name,age){
        super(name,age);
    }
    speak(){
        return "woof!";
    }
    fetch(){
        return `hello from ${this.name} (a dog) and my age is ${this.age}`;
    }
}
class Cat extends Animal{
    constructor(name,age){
        super(name,age);
    }
    speak(){
        return "meow!";
    }
    purr(){
        return `hello from ${this.name} (a cat) and my age is ${this.age}`;
    }
    //calling the parent speak
    parentSpeak(){
        return super.speak();
    }
}

const normalAnimal = new Animal("dog",10);
console.log(normalAnimal.speak());

const homeCat = new Cat("rishu",2);
console.log(homeCat.speak());
console.log(homeCat.purr());
console.log(homeCat.parentSpeak());