let nbr_hamsand=0
let nbr_tunasand=0
let nbr_vegesand=0


while (breadCount>=2 && hamCount >=1){
	breadCount -= 2
	hamCount -= 1
	nbr_hamsand+=1
}
while (breadCount>=2 && tunaCount >=1 && saladCount >=2){
	breadCount -= 2
	tunaCount -= 1
	saladCount -=2
	nbr_tunasand+=1
}
while (breadCount>=2 && tomatoCount >=2 && saladCount >=1){
	breadCount -= 2
	tomatoCount -= 2
	saladCount -=1
	nbr_vegesand+=1
}

displayThisText("Number of ham sandwich(es):"+nbr_hamsand)
displayThisText("Number of tuna sandwich(es):"+nbr_tunasand)
displayThisText("Number of vegetarian sandwich(es):"+nbr_vegesand)

displayIngredients()