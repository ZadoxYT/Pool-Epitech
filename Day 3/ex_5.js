// Write your function here ...
const fru = ["strawberry","strawberry","strawberry","apple","apple","lime","lime","peach","pear","pear"]
let length = fru.length;

console.log(length + " fruit(s) selected")

function getBasketContent() {
	return fru
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}