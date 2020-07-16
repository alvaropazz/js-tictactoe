let gameBoard = ['','','','','','','','',''];

const player1 = "X";

const player2 = "O";

const play = document.querySelector('.game-board');

let turn = 1;

play.addEventListener('click', function(e) {
      const cell = e.target;
      let player;
      if (cell){            
            if (turn % 2 !== 0) {
                  player = player1;
            } else if (turn%2==0){
                  player = player2;
            }
            turn += 1;
            console.log(player); 
      }
});

// const boardOutput = document.querySelector('.game-board');

// boardOutput.addEventListener('click', function(e){
//       const cell = e.target
//       const tokenChange = e.target.innerText = "x"
//       gameBoard[cell.getAttribute('data-index')] = tokenChange
//       // console.log(gameBoard)
//       // wins(gameBoard)
//       // console.log(cell.getAttribute('data-index'), tokenChange)
// });

// required funtions
// 1. get player details
// 2. player turn
// 3. Check wins/tiesk
// 4. update game board
// 5. Game over
// 6. GAME FLOW
// 7. RESET GAME

function player (name, token){
      this.name = name,
      this.token = token
}



// console.log(player1.name, player1.token, player2.name, player2.token)

// askNameAndToken()

// let movesLeft = () => {
//       const moves = 9
//       function checkMoves(){
//             return moves
//       }
//       function deductMoves(){
//             moves -= 1
//             return moves
//       }
//       return { checkMoves() 
//             ,deductMoves()
//       }
// }


      // let odd = turn
      // let even = turn



function wins(board){
      if(board[0] && board[1] && board[2] === 'x'){
            console.log("X wins the Game!!!")
      } else if (board[0] && board[3] && board[6] === 'x'){
            console.log("X wins the Game!!!")
      } else if (board[0] && board[4] && board[8] === 'x'){
            console.log("X wins the Game!!!")
      } else if (board[3] && board[4] && board[5] === 'x'){
            console.log("X wins the Game!!!")
      } else if (board[6] && board[7] && board[8] === 'x'){
            console.log("X wins the Game!!!")
      } else if (board[1] && board[4] && board[7] === 'x'){
            console.log("X wins the Game!!!")
      } else if (board[2] && board[5] && board[8] === 'x'){
            console.log("X wins the Game!!!")
      } else if (board[2] && board[4] && board[6] === 'x'){
            console.log("X wins the Game!!!")
      } else {
            console.log("Its a tie :-( ")
      }
}
///////////////// STORING PLAYERS //////////////////////
// function storePlayers(){
//       const player1 = "X"
//       const player2 = "O"

//       function playerOne(){
//             return player1
//       }

//       function playerTwo(){
//             return player2
//       }

//       return { playerOne()
//             , playerTwo() }
// }

// let player1 = new player('Kowski', "T");
// let player2 = new player('kim', 'x');