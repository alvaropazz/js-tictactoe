/* eslint-disable no-return-assign */
/* eslint-disable no-alert */

// eslint-disable-next-line no-undef
// include('./index');

// eslint-disable-next-line import/no-self-import
const {
  showBoard, gameBoardReset, gameBoardValue, gameBoard, player1, player2,
} = require('./index.js');

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
    // eslint-disable-next-line no-undef
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
        // eslint-disable-next-line no-const-assign
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
