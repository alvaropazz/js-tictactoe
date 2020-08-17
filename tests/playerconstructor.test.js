import playerConstructor from '../src/playerconstructor';

test('it creates a player', () => {

  const player = playerConstructor('Paz', 'O');
  expect(player).toEqual(expect.objectContaining({
    name: 'Paz',
    token: 'O',
  }));
});
