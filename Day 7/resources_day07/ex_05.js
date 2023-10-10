function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let fplusproche = null;
    let dplusproche = Infinity;
  
    for (const fname in functionsObj) {
      const functionResult = functionsObj[fname](inputNumber);
      const difference = Math.abs(functionResult - outputNumber);
  
      if (difference < dplusproche) {
        fplusproche = fname;
        dplusproche = difference;
      }
    }
  
    return fplusproche;
  }
  
  const fObj = {};
  fObj.multipleByEight = (x) => x * 8;
  fObj.square = (x) => x * x;
  fObj.addSixty = (x) => x + 60;
  
const result = findClosestResult (fObj , 5 , 26) ;
console.log (result) ;
console.log (findClosestResult (fObj , 10 , 5)) ;
console.log (findClosestResult (fObj , 5 , 45)) ;