function addCar(agentString, car) {
    const agent = JSON.parse(agentString);
    agent.car = car;
    const agentStringWithCar = JSON.stringify(agent);
    return agentStringWithCar;
}

const agentString = '{"name": "John Doe", "age": 30, "location": "New York"}';
const carBrand = 'Toyota';

const updatedAgentString = addCar(agentString, carBrand);
console.log(updatedAgentString);