
const PROMPT_DELAY = 1000;
let timeoutId = null;
let isActive = false;

const start = document.querySelector('[data-start]')
const stopClick = document.querySelector('[data-stop]')

start.addEventListener('click', onClick)
stopClick.addEventListener('click', offClick)
 
function onClick() {
    if (start !== isActive) {
      start.disabled = true;
      stopClick.disabled = false;
    }

   timeoutId = setInterval(() => {
     document.body.style.backgroundColor = getRandomHexColor();
}, PROMPT_DELAY)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function offClick() {
    if (stopClick !== isActive) {
      stopClick.disabled = true;
      start.disabled = false;
    }
    clearInterval(timeoutId)
}