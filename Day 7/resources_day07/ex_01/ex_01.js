const square = document.getElementById("square");

function reduceOpacity (){
    square.style.opacity = "0.5"
}

function resetOpacity (){
    square.style.opacity = "1"
}

square.onmouseover = (event) => {
    reduceOpacity()
};

square.onmouseout = (event) => {
    resetOpacity()
};