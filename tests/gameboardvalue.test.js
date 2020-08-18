import gameBoardValue from '../src/gameboardvalue';

test('it Populates the gameBoard array', () => {
  const gameboard = ['', '', '', '', '', '', '', '', ''];
  const tokn = 'X';
  const pos = 1;

  expect(gameBoardValue(tokn, pos, gameboard)).toStrictEqual(['', 'X', '', '', '', '', '', '', '']);
});