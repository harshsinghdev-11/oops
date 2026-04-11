// Build a Rectangle class that stores dimensions and provides area/perimeter calculations.

// Requirements:

// Properties: width, height
// Method area() — returns width * height
// Method perimeter() — returns 2 * (width + height)
// Method isSquare() — returns true if width === height
// Method scale(factor) — multiplies both dimensions by factor

class Rectangle {
    
    constructor(width , height){
        this.width = width || 0;
        this.height = height || 0;
    }
    area(){
        return this.width*this.height;
    }

}

const rectangle = new Rectangle(10,10);
console.log(rectangle.area());