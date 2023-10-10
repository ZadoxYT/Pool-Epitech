const robot = document.getElementById('robot');
const speechBubble = document.getElementById('speech-bubble');
const screenText = document.getElementById('screen-text');
const robotInput = document.getElementById('robot-input');
const eyeLeftIris = document.querySelector('.eye-left-iris');
const eyeRightIris = document.querySelector('.eye-right-iris');
let eyeClicks = 0;

function displayMessage(message, duration) {
  speechBubble.textContent = message;
  setTimeout(() => {
    speechBubble.textContent = '';
  }, duration);
}

robot.addEventListener('click', () => {
  displayMessage('Ouch, that hurts!', 2000);
});

robot.addEventListener('mousemove', (event) => {
  const coordinates = `X: ${event.clientX}, Y: ${event.clientY}`;
  screenText.textContent = coordinates;
});

robotInput.addEventListener('input', () => {
  displayMessage("Don't worry, I'll take care of it!", 2000);
});

robot.addEventListener('click', (event) => {
  if (event.target.classList.contains('eye-left-iris') || event.target.classList.contains('eye-right-iris')) {
    eyeClicks++;
    if (eyeClicks >= 10) {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      eyeLeftIris.style.fill = randomColor;
      eyeRightIris.style.fill = randomColor;
      eyeClicks = 0;
    }
  }
});
