 // Function of changing background color
const startButton = document.getElementsByTagName('button')[0];
const stopButton = document.getElementsByTagName('button')[1];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBackgroundColor() {
	document.body.style.backgroundColor = getRandomHexColor();
  }

 let intervalId;
 startButton.addEventListener('click', () => {
 startButton.disabled = true;
 intervalId = setInterval(changeBackgroundColor, 1000);
 });
 stopButton.addEventListener('click', () => {
   clearInterval(intervalId);
  startButton.disabled = false;
});

