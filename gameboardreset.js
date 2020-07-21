const gameBoardReset = () => {
  const squares = document.querySelectorAll('.game-board .cell');
  // eslint-disable-next-line no-return-assign
  Array.from(squares).forEach((e) => (e.innerText = ''));
};

export default gameBoardReset;