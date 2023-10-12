const character = document.getElementById('character');

let keyState = {};
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

let x = 0;

function gameLoop() {
    let move = 0;
    if (keyState[37]){
        move = -1;
        character.classList.add('left')
    }
    if (keyState[39]){
        move = 1;
        character.classList.remove('left')
    }

    x+=move;

    if (!move)
        character.classList.add('resting')
    else
        character.classList.remove('resting')

    character.style.marginLeft  = x * 10 +"px"

    setTimeout(gameLoop, 10);
}
gameLoop();