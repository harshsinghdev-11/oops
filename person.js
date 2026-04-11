// Create a Person class where age is validated through a setter — it cannot be negative or over 150.

// Requirements:

// Properties: name, _age (internal)
// Getter age returns _age
// Setter age validates: must be 0–150, throw Error otherwise
// Method greet() returns 'Hi, I am [name] and I am [age] years old'
// Test with valid and invalid age values

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        if(value<0 || value>150) throw new Error("Enter valid age");
        this._age = value;
        return "Age setted bro!!!!"
    }

    greet(){
        return `Hi, I am ${this.name} and I am ${this.age} years old`;
    }
}

const person1 = new Person("Harsh" , 11);

console.log(person1.age);

person1.age = 35;

console.log(person1.greet());

person1.age = -1;