// Write your code here...
function findHousing(housingToFind,housingList) {
	let temp_ar=[]
  let temp = housingToFind.toLowerCase()
  let temp_find= capitalizeFirstLetter(temp)
	if (housingList.includes(temp_find) == true) {
    temp_ar.push(housingList.indexOf(temp_find))
    temp_ar.push(temp_find)
    return temp_ar
  }else {
  	return null
  }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Use console.log to debug you're code ! It is very useful
console.log(findHousing("FLAT",["Flat", "House", "Hut", "House", "Igloo"]))

//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult(findHousing("IgLoO",["Flat", "House", "Hut", "House", "Igloo"]))