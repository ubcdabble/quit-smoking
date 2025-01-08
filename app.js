
let countdown;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

let timeLeft = 60*60*2+60*5+8;

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainderSeconds = ((seconds % 3600) % 60) % 60
    timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainderSeconds).padStart(2, "0")}`;
}

function startTimer() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            displayTime(timeLeft);
        } 
        else {
            clearInterval(countdown);
            alert("Time for a dart mate")
        }
    }, 1000);

}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = 500;
    displayTime(timeLeft);
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

displayTime(timeLeft);