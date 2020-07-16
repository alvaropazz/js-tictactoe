let gameBoard = ['','','','','','','','',''];

const player1 = "X";

const player2 = "O";

let turn = () => {
      turn = 1
      turn += 1
}
let playerTurn = (() => {
      const play = document.querySelector('.game-board');
      let turn = 1;
      let player;
      play.addEventListener('click', function (e) {
            const cell = e.target
            let dataIndex = cell.getAttribute('data-index')
            function mainFunc(playerAny, positionAny){
                  player = playerAny
                  gameBoardValue(playerAny, positionAny)
                  cell.innerText = `${playerAny}`
                  turn += 1
                  wins(gameBoard, playerAny, turn)
            }
            if (cell) {
                  if (gameBoard[dataIndex] === ''){
                        if (turn % 2 !== 0) {
                              mainFunc(player1, dataIndex)
                        } else if (turn % 2 == 0) {
                              mainFunc(player2, dataIndex)
                        }
                  } else {
                        alert("position taken")
                  }
            }
      });
      
});

playerTurn();

let gameBoardValue = (token, position) => {
      gameBoard[position] = token;
}

// required funtions
// 1. get player details
// 2. player turn
// 3. Check wins/ties
// 4. update game board
// 5. Game over
// 6. GAME FLOW
// 7. RESET GAME

function player (name, token){
      this.name = name,
      this.token = token
}

function wins(board, who, counter){
      if(board[0] === board[1] && board[0] === board[2] && board[0] !== '' ){
            console.log(`${who} wins the Game!!!`) 
      } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '' ){
            console.log(`${who} wins the Game!!!`)
      } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '' ){
            console.log(`${who} wins the Game!!!`)
      } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '' ){
            console.log(`${who} wins the Game!!!`)
      } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '' ){
            console.log(`${who} wins the Game!!!`)
      } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '' ){
            console.log(`${who} wins the Game!!!`)
      } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '' ){
            console.log(`${who} wins the Game!!!`)
      } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '' ){
            console.log(`${who} wins the Game!!!`)
      } else if (counter > 9) {
            console.log(" Its a tie :-( ")
      }
}