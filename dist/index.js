"use strict";
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            return `Sorry, the ${this.make} ${this.model} ${this.year} is already rented.`;
        }
        else {
            this.rented = true;
            return `You have rented the ${this.make} ${this.model} ${this.year}.`;
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            return `Thank you for returning the ${this.make} ${this.model} ${this.year} .`;
        }
        else {
            return `The ${this.make} ${this.model} ${this.year} is not rented.`;
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numSeats) {
        super(make, model, year);
        this.numSeats = numSeats;
    }
    rentalRate() {
        return 50; // $50 per day
    }
    getNumSeats() {
        return this.numSeats;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, loadCapacity) {
        super(make, model, year);
        this.loadCapacity = loadCapacity;
    }
    rentalRate() {
        return 75;
    }
    getPayloadCapacity() {
        return this.loadCapacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, engineSize) {
        super(make, model, year);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 25;
    }
    getEngineSize() {
        return this.engineSize;
    }
}
const car = new Car("Toyota", "Corolla", 2022, 5);
console.log("Car_____________________________________________");
console.log(car.rent());
console.log(car.rent());
console.log(`Per Day Rent is ${car.rentalRate()}$`);
console.log(`Number of Seats ${car.getNumSeats()}`);
console.log(car.return());
const truck = new Truck("Ford", "F-150", 2021, 1500);
console.log("Truck_____________________________________________");
console.log(truck.rent());
console.log(`Per Day Rent is ${truck.rentalRate()}$`);
console.log(`Load Capacity is ${truck.getPayloadCapacity()}`);
console.log(truck.return());
const motorcycle = new Motorcycle("Harley-Davidson", "Softail", 2020, 107);
console.log("Motorcycle_____________________________________________");
console.log(motorcycle.rent());
console.log(`Per Day Rent is ${motorcycle.rentalRate()}$`);
console.log(`Engine Size is ${motorcycle.getEngineSize()}`);
console.log(motorcycle.return());
//# sourceMappingURL=index.js.map