import showBoard from '../src/showboard';

test('should hide/show board and player name form', () => {
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
    <div class='user-input'>
        <form onsubmit="return false;">
                <div class='submit-field'>
                    <label for="p1">X</label>
                    <input type="text" placeholder="Player 1 Name" id='p1' >
                </div>
                <br>
                <div class='submit-field'>
                    <label for="p2">O</label>
                    <input type="text" placeholder="Player 2 Name" id='p2' >
                </div>
                <br>
                <input type="submit" class="submit-btn">
        </form>
    </div>
  `;

  const button = document.querySelector('.submit-btn');

  const board = document.querySelector('.game-board');
  board.style.display = 'none';

  const names = document.querySelector('.user-input');
  names.style.display = 'block';

  button.addEventListener('click', (e) => {
    e.preventDefault();
    showBoard();
  });

  button.click();

  expect(board).toHaveStyle('display: grid');
  expect(names).toHaveStyle('display: none');
});
