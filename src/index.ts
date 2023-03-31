abstract class Vehicle {
    private make: string;
    private model: string;
    private year: number;
    private rented: boolean;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = false;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): string {
      if (this.rented) {
        return `Sorry, the ${this.make} ${this.model} ${this.year} is already rented.`;
      } else {
        this.rented = true;
        return `You have rented the ${this.make} ${this.model} ${this.year}.`;
      }
    }
  
    return(): string {
      if (this.rented) {
        this.rented = false;
        return `Thank you for returning the ${this.make} ${this.model} ${this.year} .`;
      } else {
        return `The ${this.make} ${this.model} ${this.year} is not rented.`;
      }
    }
  }
  
  class Car extends Vehicle {
    private numSeats: number;
  
    constructor(make: string, model: string, year: number, numSeats: number) {
      super(make, model, year);
      this.numSeats = numSeats;
    }
  
    rentalRate(): number {
      return 50; // $50 per day
    }
  
    getNumSeats(): number {
      return this.numSeats;
    }
  }
  
  class Truck extends Vehicle {
    private loadCapacity: number;
  
    constructor(make: string, model: string, year: number, loadCapacity: number) {
      super(make, model, year);
      this.loadCapacity = loadCapacity;
    }
  
    rentalRate(): number {
      return 75;
    }
  
    getPayloadCapacity(): number {
      return this.loadCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineSize: number;
  
    constructor(make: string, model: string, year: number, engineSize: number) {
      super(make, model, year);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 25;
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
  }
  

  
  const car = new Car("Toyota", "Corolla", 2022, 5);
  console.log("Car_____________________________________________");
  console.log(car.rent());
  console.log(car.rent());  
  console.log(`Per Day Rent is ${car.rentalRate()}$`)
  console.log(`Number of Seats ${car.getNumSeats()}`)
  console.log(car.return()); 
  
  const truck = new Truck("Ford", "F-150", 2021, 1500);
  console.log("Truck_____________________________________________");
  console.log(truck.rent());
  console.log(`Per Day Rent is ${truck.rentalRate()}$`)
  console.log(`Load Capacity is ${truck.getPayloadCapacity()}`)
  console.log(truck.return()); 
  
  const motorcycle = new Motorcycle("Harley-Davidson", "Softail", 2020, 107);
  console.log("Motorcycle_____________________________________________");
  console.log(motorcycle.rent());
  console.log(`Per Day Rent is ${motorcycle.rentalRate()}$`)
  console.log(`Engine Size is ${motorcycle.getEngineSize()}`)
  console.log(motorcycle.return());
  