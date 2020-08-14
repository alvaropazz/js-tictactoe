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

export default showBoard