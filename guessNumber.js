let secretNumber;
let attempts = 0;

function generateRandomNumber() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

function alerts(message) {
    alert(message);
}

function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    document.getElementById('attempts').innerText = attempts;

    if (guess === secretNumber) {
        alerts("Вітаємо! Ви вгадали число!");
    } else if (guess < secretNumber) {
        alerts("Загадане число більше.");
    } else {
        alerts("Загадане число менше.");
    }
}

function newGame() {
    generateRandomNumber();
    attempts = 0;
    document.getElementById('attempts').innerText = attempts;
    document.getElementById('message').innerText = "";
    document.getElementById('guessInput').value = "";
}

// Старт нової гри при завантаженні сторінки
window.onload = function() {
    newGame();
};
