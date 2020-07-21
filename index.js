/* eslint-disable import/prefer-default-export */
/* eslint-disable no-return-assign */
/* eslint-disable no-alert */
import showBoard from './showboard';
import gameBoardReset from './gameboardreset';

// eslint-disable-next-line prefer-const
// eslint-disable-next-line import/no-mutable-exports
const gameBoard = ['', '', '', '', '', '', '', '', ''];

const playerConstructor = (name, token) => ({ name, token });

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

const gameBoardValue = (token, position) => {
  gameBoard[position] = token;
};

exports.showBoard = showBoard;
exports.gameBoardValue = gameBoardValue;
exports.gameBoardReset = gameBoardReset;
exports.player1 = player1;
exports.player2 = player2;
exports.gameBoard = gameBoard;