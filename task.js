const changeButton = document.getElementById('Btn');

changeButton.addEventListener('click', changeText);

function changeText() {
    changeButton.textContent = 'Stop';
    changeButton.style.backgroundColor = 'red';
}


let timerInterval;
let start;
let count = 0;

function startStopTimer() {
    const Btn = document.getElementById("Btn");
    const Display = document.getElementById("timer");
    const timetaken = document.getElementById("timeTaken");
    const task = document.getElementById("task");
    const description = document.getElementById("description");

    if (Btn.innerHTML === "Start") {
        Btn.innerHTML = "Stop";
        start = new Date().getTime() - count;
        timerInterval = setInterval(updateTimer, 500);
    } else {
        Btn.innerHTML = "Start";
        clearInterval(timerInterval);
        count = new Date().getTime() - start;
        displayTimeTaken();
        displayTaskDescription(task.value, description.value);
    }
}

function updateTimer() {
    const Display = document.getElementById("timer");
    const currentTime = new Date().getTime();
    const deltaTime = currentTime - start;
    const formattedTime = formatTime(deltaTime);
    Display.innerHTML = formattedTime;
}

function formatTime(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    return (
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}

function displayTimeTaken() {
    const timetaken = document.getElementById("timeTaken");
    const formattedTime = formatTime(count);
    timetaken.innerHTML = "Time Taken: " + formattedTime;
}

function displayTaskDescription(task, description) {
    const inputdisplay = document.getElementById("taskDescription");
    inputdisplay.innerHTML = `Task: ${task}<br>Description: ${description}`;
}


