let text = document.getElementById('text')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winn = getComputedStyle(document.body).getPropertyValue('winning-blocks')

const O = "O"
const X = "X"
let currentPlayer = X

let hejsan = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if (!hejsan[id]) {
        hejsan[id] = currentPlayer
        e.target.innerText = currentPlayer

        if (playerss() !== false) {
            text.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerss()

            winning_blocks.map(box => boxes[box].style.backgroundColor = winn)
            return
        }

        currentPlayer = currentPlayer == X ? O : X
    }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playerss() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if (hejsan[a] && (hejsan[a] == hejsan[b] && hejsan[a] == hejsan[c])) {
            return [a, b, c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    hejsan.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    text.innerHTML = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}

startGame()
