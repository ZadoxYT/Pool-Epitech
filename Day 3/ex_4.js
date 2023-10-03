// Your code here...
let a = 2
let b = 15
let action = "add"

function calculator() {
	let result = 0
	if (action === "add"){
  	result = addition(a,b)
  } else if (action ==="sub") {	
 	result = subtraction(a,b)
  }
  return result
}


function addition(a,b){
	let res = a+b 
		return res
}

function subtraction(a,b){
	let resa = a-b
		return resa
}


// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}