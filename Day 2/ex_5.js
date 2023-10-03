var firstname = "John";
var lastname = "Doe";
var cardCode = "1111 2222 3333 4444";
var expiryDateMonth = 21;
var expiryDateYear = 2042;

let computedBankInfo = firstname+","+lastname+","+cardCode+","+expiryDateMonth/expiryDateYear;
computedBankInfo.toString()


displayInCard(computedBankInfo)