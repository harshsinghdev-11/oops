// Build a Temperature class with static utility methods for converting between units.

// Requirements:

// Static method celsiusToFahrenheit(c) — returns (c * 9/5) + 32
// Static method fahrenheitToCelsius(f) — returns (f - 32) * 5/9
// Static method celsiusToKelvin(c) — returns c + 273.15
// Instance stores a value in Celsius; method toString() shows formatted output

class Temperature{
    constructor(celcius){
        this.celcius = celcius;
    }
    toString(){
        return `${this.celcius} c`;
    }
    static celsiusToFahrenheit(c){
        return (c* 9/5)+32;
    }
    static fahrenheitToCelsius(f){
        returns (f - 32) * 5/9;
    }
    
}

console.log(Temperature.celsiusToFahrenheit(20));
const temp1 = new Temperature(20);
console.log(temp1.toString());
