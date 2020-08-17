import gameBoardReset from './gameboard';
import wins from './wins';
import showBoard from './showboard';
import playerConstructor from './playerconstructor';
import gameBoardValue from './gameboardvalue';

let gameBoard = ['', '', '', '', '', '', '', '', ''];

let player1;
let player2;

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

const startGame = () => {
  const play = document.querySelector('.game-board');
  let turn = 1;
  play.addEventListener('click', (e) => {
    const cell = e.target;
    const dataIndex = cell.getAttribute('data-index');
    function mainFunc(playerAny, positionAny) {
      cell.innerText = `${playerAny.token}`;
      gameBoardValue(playerAny, positionAny, gameBoard);
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
        // eslint-disable-next-line
        alert('position taken');
      }
    }
  });
};

export { startGame, playerConstructor };