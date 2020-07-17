let gameBoard = ["", "", "", "", "", "", "", "", ""];

const playerConstructor = (name, token) => {
  return { name, token };
};

let player1;
let player2;

let form = document.querySelector(".user-input");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const p1 = form.querySelector('input[id="p1"]').value;
  const p2 = form.querySelector('input[id="p2"]').value;

  if (p1 && p2) {
    player1 = playerConstructor(`${p1}`, "X");
    player2 = playerConstructor(`${p2}`, "0");
    showBoard();
  }
  console.log(player1, player2);
});

function showBoard() {
  const board = document.querySelector(".game-board");
  const names = document.querySelector(".user-input");
  if (board.style.display === "grid") {
    board.style.display = "none";
  } else {
    board.style.display = "grid";
  }
  if (names.style.display === "none") {
    names.style.display = "block";
  } else {
    names.style.display = "none";
  }
}

let gameBoardReset = () => {
  let squares = document.querySelectorAll(".game-board .cell");
  Array.from(squares).forEach((e, index) => (e.innerText = ""));
};

let gameBoardValue = (token, position) => {
  gameBoard[position] = token;
};

let playerTurn = () => {
  const play = document.querySelector(".game-board");
  let turn = 1;
  play.addEventListener("click", function (e) {
    const cell = e.target;
    let dataIndex = cell.getAttribute("data-index");
    function mainFunc(playerAny, positionAny) {
      cell.innerText = `${playerAny.token}`;
      gameBoardValue(playerAny, positionAny);
      turn += 1;
      if (wins(gameBoard, playerAny, turn)) {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        turn = 1;
        gameBoardReset();
        console.log(turn);
        console.log(gameBoard);
      }
    }
    if (cell) {
      if (gameBoard[dataIndex] === "") {
        if (turn % 2 !== 0) {
          mainFunc(player1, dataIndex);
        } else if (turn % 2 == 0) {
          mainFunc(player2, dataIndex);
        }
      } else {
        alert("position taken");
      }
    }
  });
};

playerTurn();

function wins(board, who, counter) {
  if (
    (board[0] === board[1] && board[0] === board[2] && board[0] !== "") ||
    (board[0] === board[3] && board[0] === board[6] && board[0] !== "") ||
    (board[0] === board[4] && board[0] === board[8] && board[0] !== "") ||
    (board[3] === board[4] && board[3] === board[5] && board[3] !== "") ||
    (board[6] === board[7] && board[6] === board[8] && board[6] !== "") ||
    (board[1] === board[4] && board[1] === board[7] && board[1] !== "") ||
    (board[2] === board[5] && board[2] === board[8] && board[2] !== "") ||
    (board[2] === board[4] && board[2] === board[6] && board[2] !== "")
  ) {
    alert(`${who.name} wins the Game!!!`);
    showBoard();
    return true;
  } else if (counter > 9) {
    alert(" Its a tie :-( ");
    showBoard();
    return true;
  }
}