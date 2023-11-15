function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let gameStarted = false;
let timeLeft = 60;
let cellsToGuess = 10;
let guessedCells = 0;
let selectedCells = new Set();

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    if (gameStarted) return;
    
    gameStarted = true;
    guessedCells = 0;
    timeLeft = 60;
    updateTimerDisplay();
    
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    selectedCells.clear();

    while (selectedCells.size < cellsToGuess) {
        const row = getRandomInt(0, 9);
        const col = getRandomInt(0, 9);
        selectedCells.add(`${row}-${col}`);
    }

    for (let i = 0; i < 10; i++) {
        const row = gameBoard.insertRow();
        for (let j = 0; j < 10; j++) {
            const cell = row.insertCell();
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', checkCell);
        }
    }

    setTimeout(endGame, 60000);
}

function checkCell() {
    if (!gameStarted) return;
    
    const row = this.dataset.row;
    const col = this.dataset.col;
    const cellId = `${row}-${col}`;

    if (selectedCells.has(cellId)) {
        this.style.backgroundColor = '#5cb85c';
        selectedCells.delete(cellId);
        guessedCells++;
        if (guessedCells === cellsToGuess) {
            endGame(true);
        }
    } else {
        this.style.backgroundColor = '#d9534f';
    }
}

function endGame(isWinner = false) {
    gameStarted = false;
    selectedCells.clear();
    const message = isWinner ? 'Поздравляем! Вы выиграли!' : 'Вы проиграли. Попробуйте еще раз.';
    alert(message);
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('time-left');
    timerDisplay.textContent = timeLeft;
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimerDisplay, 1000);
    } else {
        endGame();
    }
}
