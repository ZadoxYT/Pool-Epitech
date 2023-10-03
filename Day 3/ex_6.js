fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function index_fruits(fruit) {
	let temp = fruits.indexOf(fruit)
  if (temp == -1) {
  	displayResult(null)
  } else {
  	displayResult(temp)
  }
}

index_fruits("Banana")