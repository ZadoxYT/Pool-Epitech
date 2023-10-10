let currentRotation = 0;
let circle = document.getElementById("circle");

function rotateCircle(step) {
    currentRotation += step;
    circle.style.transform = `rotate(${currentRotation}deg)`;
}


function reset() {
    circle.style.transform = "rotate(0deg)";
    currentRotation = 0;
}


let buttons = document.getElementsByClassName('rotate-button');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if (this.value === '0') {
            reset();
        } else {
            rotateCircle(parseInt(this.value));
        }
    })
}