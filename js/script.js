'use strict';

// reference
const X_TEXT = 'X';
const O_TEXT = 'O';

const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box')
const heading = document.querySelector('h1');
const restartBtn = document.querySelector('button');
const emptyBoxes = Array(9).fill(null);

let currentPlayer = X_TEXT;

let winnerList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]



const startGame = function (e) {
    if (e.target.classList.contains('box')) {
        const id = e.target.id;

        if (!emptyBoxes[id]) {
            emptyBoxes[id] = currentPlayer;
            e.target.innerHTML = emptyBoxes[id]
        }
    }

    if (winGame()) {
        heading.textContent = `${currentPlayer} has won`;
        const winBlock = winGame();
        winBlock.forEach(box => {
            boxes[box].style.backgroundColor = '#2d414b';
        })
    }

    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
}


const winGame = function () {
    for (const item of winnerList) {
        const [a, b, c] = item;

        if (emptyBoxes[a] && (emptyBoxes[a] === emptyBoxes[b]) && (emptyBoxes[a] === emptyBoxes[c]))
            return [a, b, c]
    }

    return false;

}


const restartGame = function () {
    boxes.forEach(box => box.textContent = '');
    heading.textContent = 'tic tac toe';
    emptyBoxes = Array(9).fill(null);
}


boxContainer.addEventListener('click', function (e) {
    startGame(e)
})

restartBtn.addEventListener('click', restartGame)