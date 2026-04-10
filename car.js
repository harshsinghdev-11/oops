// Create a Car class that represents a vehicle. It should store basic info and provide a method to display details.

// Requirements:

// Properties: brand, model, year, speed (default 0)
// Method accelerate(amount) — increases speed
// Method brake(amount) — decreases speed (min 0)
// Method getInfo() — returns a string like 'Toyota Camry (2020) — 60 km/h'


class Car{
    constructor(brand , model , year , speed){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed || 0;
    }

    accelerate(amount){
        this.speed+=amount;
    }
    brake(amount){
        this.speed-=amount;
        if(this.speed<0) this.speed = 0;
    }
    getInfo(){
        let info = `${this.brand}` + `${this.model}` + `(${this.year})` + `-` + `${this.speed}`;
        return info;
    }
}
const car1 = new Car("Maruti",200,2020,0);
let info = car1.getInfo();
console.log(info);