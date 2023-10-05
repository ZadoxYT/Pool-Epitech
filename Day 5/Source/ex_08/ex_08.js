document.addEventListener('DOMContentLoaded', function() {
  let removesom = document.getElementById("tag")
removesom.remove()

document.getElementById("productName").innerHTML = "Samsung 22";

var paragraphse = document.getElementById("addToCart")
var newParagraph = document.createElement('h2');
var temp = 0
newParagraph.textContent = 'In cart : ' + temp;
paragraphse.insertAdjacentElement('afterend', newParagraph);

function addToCart() {
    newParagraph.textContent = 'In cart : ' + temp;
}

const button = document.getElementById('addToCart')
button.addEventListener('click', function() {
    temp += 1;
    addToCart()
})

const arr_mod = ["Never miss that perfect shot again.","Designed to revolutionise video and photography, with beyond cinematic 16K resolution.","Get yours now !"]
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent = arr_mod[i];
}

document.querySelector("img").src="../ex_08/Samsung22.png";
});