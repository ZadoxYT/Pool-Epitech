let temp = 0
function getAngryDog(numberOfWoofs)
{
let str = ""
while (temp < numberOfWoofs) {
	temp += 1
  str = str + "woof"
}
return str
}



//Some code to test your function output : (you can modify it but /!\ do not deliver it /!\ ). Only deliver your function
var result = getAngryDog(3);
displayResult(result);