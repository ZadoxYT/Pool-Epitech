document.addEventListener('DOMContentLoaded', function() {
    function displayAgentInfo(obj) {
        const container = document.getElementById('container');
        const paragraph = document.createElement('p');
        paragraph.textContent = `My name is ${obj.lastname}, ${obj.firstname} ${obj.lastname}! I'm the agent ${obj.code} and I'm ${obj.age} years old.`;
        container.appendChild(paragraph);
    }

    const agent = {
        firstname: 'James',
        lastname: 'Bond',
        code: '007',
        age: 51,
      };
      
    displayAgentInfo(agent);
});