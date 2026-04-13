// Create a Shape base class and three subclasses. Write a function that accepts any shape and prints its area — without if/else or typeof checks.

// Requirements:

// Shape base class with area() that throws 'Not implemented'
// Circle extends Shape — area = PI * r^2
// Rectangle extends Shape — area = width * height
// Triangle extends Shape — area = 0.5 * base * height
// Function printArea(shape) calls shape.area() — works for all three without type checking

class Shape{
    area(){
        throw new Error("Not implemented")
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
}

class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width*this.height;
    }
}

function printArea(shape){
    console.log(shape.area());
}

const r1 = new Rectangle(10,10);
printArea(r1);