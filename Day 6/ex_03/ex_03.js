function addCarToAgent(agent, brand, model, color, power) {
    if (!agent || typeof agent !== 'object') {
      console.error('Agent object incorrectly typed');
      return null;
    }
    if (!brand || typeof brand !== 'string') {
      console.error('Brand incorrectly typed');
      return null;
    }
    if (!model || typeof model !== 'string') {
      console.error('Model incorrectly typed');
      return null;
    }
    if (!color || typeof color !== 'string') {
      console.error('Color incorrectly typed');
      return null;
    }
    if (!power || typeof power !== 'string') {
      console.error('Power incorrectly typed');
      return null;
    }
    agent.car = {
      brand: brand,
      model: model,
      color: color,
      power: power
    };
  
    return agent;
  }

const agent = {
    firstname: 'James',
    lastname: 'Bond',
    age: 45,
    location: 'London'
  };
  
const updatedAgent = addCarToAgent(agent, 'Aston Martin', 'DB5', 'Silver', '280 horsepower');
shareThatBeauty(updatedAgent);
  