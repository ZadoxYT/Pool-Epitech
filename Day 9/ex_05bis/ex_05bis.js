const character = document.getElementById('character');
let positionX = 0;
let speed = 5;

function moveCharacter() {
  character.style.left = positionX + 'px';
}

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    positionX -= speed;
    character.style.transform = 'scaleX(-1)'; 
  } else if (event.key === 'ArrowRight') {
    positionX += speed;
    character.style.transform = 'scaleX(1)';
  }

  moveCharacter();
}

function handleKeyUp(event) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    positionX = positionX;
    moveCharacter();
  }
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);