const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElement = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T');
dateEl.setAttribute('min', today[0]);

// Populate Countdown / Complete UI
function updateDOM() {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distance:', distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);
    
    // Populate Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElement[0].textContent = `${days}`;
    timeElement[1].textContent = `${hours}`;
    timeElement[2].textContent = `${minutes}`;
    timeElement[3].textContent = `${seconds}`;

    // Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
}

// Take values from form input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
    // Get number version of current Date, updateDOM
    countdownValue = new Date(countdownDate).getTime();
    console.log('countdown value:',countdownValue);
    updateDOM();
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);