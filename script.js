let time = 25 * 60;
let timer;
let running = false;

function updateTimer() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  document.getElementById("timer").textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateTimer();
      } else {
        clearInterval(timer);
        running = false;
        alert("Time's up!");
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  stopTimer();
  time = 25 * 60;
  updateTimer();
}

updateTimer();
