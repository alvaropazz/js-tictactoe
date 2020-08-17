const gameBoardValue = (token, position, board) => {
  board[position] = token;
  return board;
};

export default gameBoardValue;