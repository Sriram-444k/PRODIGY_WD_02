let minute = 0;
let second = 0;
let microsecond = 0;
let interval;
let lapNumber = 0;

const minuteSpan = document.querySelector('.minute');
const secondSpan = document.querySelector('.second');
const microsecondSpan = document.querySelector('.microsecond');
const lapTimesContainer = document.querySelector('.lap-times');

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', recordLap);

function startTimer() {
    clearInterval(interval);
    interval = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    minute = 0;
    second = 0;
    microsecond = 0;
    lapNumber = 0;
    lapTimesContainer.innerHTML = '';
    updateDisplay();
}

function updateTimer() {
    microsecond++;
    if (microsecond >= 100) {
        microsecond = 0;
        second++;
    }
    if (second >= 60) {
        second = 0;
        minute++;
    }
    updateDisplay();
}

function updateDisplay() {
    minuteSpan.textContent = formatTime(minute) + " : ";
    secondSpan.textContent = formatTime(second) + " : ";
    microsecondSpan.textContent = formatTime(microsecond);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function recordLap() {
    lapNumber++;
    const lapTime = `${formatTime(minute)} : ${formatTime(second)} : ${formatTime(microsecond)}`;
    const lapItem = document.createElement('li');
    lapItem.innerHTML = `<span>Lap ${lapNumber}</span><span>${lapTime}</span>`;
    lapTimesContainer.appendChild(lapItem);
}
