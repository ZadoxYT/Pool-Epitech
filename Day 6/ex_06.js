const car1 = {
    color: "Red",
    brand: "Toyota",
    model: "Camry"
};
const car2 = {
    color: "Blue",
    brand: "Honda",
    model: "Accord"
};
  const car3 = {
    color: "Black",
    brand: "Ford",
    model: "Mustang"
  };
const agent1 = {
    name: "John Doe",
    code: "12345",
    age: 30,
    car: car1,
    isMatching(key, value) {
      return this.car[key] === value;
    }
};

const agent2 = {
    name: "Jane Smith",
    code: "54321",
    age: 35,
    car: car2,
    isMatching(key, value) {
      return this.car[key] === value;
    }
};
  
const agent3 = {
    name: "Bob Johnson",
    code: "98765",
    age: 40,
    car: car3,
    isMatching(key, value) {
      return this.car[key] === value;
    }
};
  
  // Array of agents
  const agents = [agent1, agent2, agent3];
  
  // Function to search cars
  function searchCars(agents, key, value) {
    const matchingCars = agents.reduce((matching, agent) => {
      if (agent.isMatching(key, value)) {
        matching.push(agent.car);
      }
      return matching;
    }, []);
    
    return matchingCars;
  }
  
  // Usage
  const matchingCars = searchCars(agents, "brand", "Honda");
  console.log(matchingCars);
  