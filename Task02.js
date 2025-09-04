let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  let seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
  }, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
  laps.innerHTML = "";
  startBtn.disabled = false;
}

function addLap() {
  if (elapsedTime > 0) {
    const li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    laps.appendChild(li);
  }
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);
