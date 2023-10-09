// Car object
const car = {
    color: "grey",
    brand: "Aston Martin",
    model: "DB5",
    logInfo() {
      console.log(`Car information: ${this.color}, ${this.model}, ${this.brand})`);
    }
  };
  
  // Agent object
  const agent = {
    firstname: "James",
    lastname: "Bond",
    code: '007',
    age: 57,
    car: car,
    logInfo() {
      console.log(`Agent information: ${this.firstname} ${this.lastname}, ${this.code}, ${this.age}`);
      console.log(`James bond's Car information: ${car.color}, ${car.model}, ${car.brand}`);
    }
  };

  agent.logInfo();
  car.logInfo();
  