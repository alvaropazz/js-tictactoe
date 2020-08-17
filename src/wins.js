import showBoard from './showboard';

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
    // eslint-disable-next-line
    alert(`${who.name} ( ${who.token} ) wins the Game!!!`);
    showBoard();
    return true;
  }
  if (counter > 9) {
    // eslint-disable-next-line
    alert('It\'s a tie :-(');
    showBoard();
    return true;
  }
  return false;
}

export default wins;