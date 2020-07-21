const gameBoardReset = () => {
  const squares = document.querySelectorAll('.game-board .cell');
  Array.from(squares).forEach((e) => (e.innerText = ''));
};

export default gameBoardReset;