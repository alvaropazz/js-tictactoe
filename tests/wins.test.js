import wins from '../src/wins';

const gameBoardLose = ['', '', '', '', '', '', '', '', ''];

const playerAny = {
  token: 'x',
  name: 'Jay',
};

test('it returns false when no winner or loser is declared', () => {
  expect(wins(gameBoardLose, playerAny, 2)).toBe(false);
});