let gameBoard = ['', '', '', '', '', '', '', '', ''];

const gameBoardReset = () => {
  const squares = document.querySelectorAll('.game-board .cell');
  Array.from(squares).forEach((e) => (e.innerText = ''));
};

const gameBoardValue = (token, position) => {
  gameBoard[position] = token;
};

export {gameBoard, gameBoardReset, gameBoardValue}