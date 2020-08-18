import gameBoardReset from '../src/gameboard';


test('it deletes the content of the grid', () => {
  document.body.innerHTML = `
    <div class="game-board">
            <div class="cell" data-index='0'></div>
            <div class="cell" data-index='1'></div>
            <div class="cell" data-index='2'></div>
            <div class="cell" data-index='3'></div>
            <div class="cell" data-index='4'></div>
            <div class="cell" data-index='5'></div>
            <div class="cell" data-index='6'></div>
            <div class="cell" data-index='7'></div>
            <div class="cell" data-index='8'></div>
    </div>
    `;
  expect(gameBoardReset()).toStrictEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
});
