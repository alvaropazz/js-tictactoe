const gameBoardReset = () => {
  const squares = document.querySelectorAll('.game-board .cell');
  let content = [];
  Array.from(squares).forEach((e) => {
    e.innerText = ' ';
    content.push(e.innerText)
  })
  return content
};


export default gameBoardReset;