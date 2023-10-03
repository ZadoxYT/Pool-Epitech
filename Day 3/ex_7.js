fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruitNameFromIndex(index) {
	if (typeof index === 'string' || index == -1) {
  	return fruits.at(fruits.length-1)
  } else if (index > fruits.length -1) {
  	return null
  }
	return fruits.at(index)
}

let result = getFruitNameFromIndex("last")
displayResult(result)