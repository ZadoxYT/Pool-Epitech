let sandwich;
sandwich = 0

function verif(a,b,c){
	if (a>=2) {
  	if (b>=1) {
    	if (c>=1) {
      	sandwich=3
      } else if (c<=1) {
      	sandwich=2
      }
    } else if (b<=0) {
    	if (c>=1){
      	sandwich=1
      }
    }
  }
}

verif(breadCount,hamCount,tunaCount)

if (sandwich == 0){
	displayThisText("I'd rather be fasting tonight..")
} else if (sandwich == 3){
	displayThisText("I can make a royal sandwich!.")
} else if (sandwich == 2){
	displayThisText("I can make a ham sandwich!")
} else if (sandwich == 1){
	displayThisText("I can make a tuna sandwich!.")
}
