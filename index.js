/* eslint-disable no-return-assign */
/* eslint-disable no-alert */

let gameBoard = ['', '', '', '', '', '', '', '', ''];

const playerConstructor = (name, token) => ({ name, token });

let player1;
let player2;

function showBoard() {
  const board = document.querySelector('.game-board');
  const names = document.querySelector('.user-input');
  if (board.style.display === 'grid') {
    board.style.display = 'none';
  } else {
    board.style.display = 'grid';
  }
  if (names.style.display === 'none') {
    names.style.display = 'block';
  } else {
    names.style.display = 'none';
  }
}

const form = document.querySelector('.user-input');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const p1 = form.querySelector('input[id="p1"]').value;
  const p2 = form.querySelector('input[id="p2"]').value;

  if (p1 && p2) {
    player1 = playerConstructor(`${p1}`, 'X');
    player2 = playerConstructor(`${p2}`, '0');
    showBoard();
  }
});

const gameBoardReset = () => {
  const squares = document.querySelectorAll('.game-board .cell');
  Array.from(squares).forEach((e) => (e.innerText = ''));
};

const gameBoardValue = (token, position) => {
  gameBoard[position] = token;
};

// eslint-disable-next-line
function wins(board, who, counter) {
  if (
    (board[0] === board[1] && board[0] === board[2] && board[0] !== '')
            || (board[0] === board[3] && board[0] === board[6] && board[0] !== '')
            || (board[0] === board[4] && board[0] === board[8] && board[0] !== '')
            || (board[3] === board[4] && board[3] === board[5] && board[3] !== '')
            || (board[6] === board[7] && board[6] === board[8] && board[6] !== '')
            || (board[1] === board[4] && board[1] === board[7] && board[1] !== '')
            || (board[2] === board[5] && board[2] === board[8] && board[2] !== '')
            || (board[2] === board[4] && board[2] === board[6] && board[2] !== '')
  ) {
    alert(`${who.name} ( ${who.token} ) wins the Game!!!`);
    showBoard();
    return true;
  }
  if (counter > 9) {
    alert(' Its a tie :-( ');
    showBoard();
    return true;
  }
}

const startGame = () => {
  const play = document.querySelector('.game-board');
  let turn = 1;
  play.addEventListener('click', (e) => {
    const cell = e.target;
    const dataIndex = cell.getAttribute('data-index');
    function mainFunc(playerAny, positionAny) {
      cell.innerText = `${playerAny.token}`;
      gameBoardValue(playerAny, positionAny);
      turn += 1;
      if (wins(gameBoard, playerAny, turn)) {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        turn = 1;
        gameBoardReset();
      }
    }
    if (cell) {
      if (gameBoard[dataIndex] === '') {
        if (turn % 2 !== 0) {
          mainFunc(player1, dataIndex);
        } else if (turn % 2 === 0) {
          mainFunc(player2, dataIndex);
        }
      } else {
        alert('position taken');
      }
    }
  });
};

startGame();