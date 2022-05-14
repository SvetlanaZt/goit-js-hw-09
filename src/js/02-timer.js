import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker')
const start = document.querySelector('[data-start]')

const daysShow = document.querySelector('[data-days]')
const hoursShow = document.querySelector('[data-hours]')
const minutesShow = document.querySelector('[data-minutes]')
const secondsShow = document.querySelector('[data-seconds]')

let selectedDate;
let setIntervalClear = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {  
        selectedDate = selectedDates[0].getTime();
        if (selectedDates[0].getTime() < currentTime) {
            start.disabled = true;
            window.alert("Please choose a date in the future")
        }
        }
};
flatpickr(input, options)

const currentTime = options.defaultDate.getTime();
  
start.addEventListener('click', onClick)
function onClick() { 
  setIntervalClear = setInterval(() => {
     const newDate = new Date();
        let result = selectedDate - newDate.getTime();
    let { days, hours, minutes, seconds } = convertMs(result)
  daysShow.textContent = days;
  hoursShow.textContent = hours;
  minutesShow.textContent = minutes;
    secondsShow.textContent = seconds;
        if (seconds <= 0) {
          clearInterval(setIntervalClear);
          start.disabled = true;
  }
  }, 1000)


}

//  для трансформация секунд в норма время
function pad(value) { 
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
    
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
