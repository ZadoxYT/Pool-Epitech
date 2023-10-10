function map(elements, modifier) {
    const modifiedArray = [];
    for (let i = 0; i < elements.length; i++) {
      modifiedArray.push(modifier(elements[i]));
    }
    return modifiedArray;
}

function isEven ( number ) {
    return number % 2 === 0;
}
    
console . log ( map ([5 , 8 , 10] , isEven ) ) ;