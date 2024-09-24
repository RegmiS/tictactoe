// 9 spots, 2 players, board with spot and either blank or not blank
// 3 ways across to win, 3 ways down to win, 2 diagonals to win

const board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
let playerState = "X";
const boardDisplay = document.querySelector('.gameBoard');
const curplayer = document.querySelector('#gamestate');
console.table(board);

function updateCurPlayer(){
    const playerStatement = playerState=="X"? "Player1  X" : "Player2 O";
    curplayer.innerHTML = "Cur Player: " + playerStatement;
}

function gameButtonClick(x,y){
    console.log(x, y);
    if (board[x][y]== " "){
        board[x][y] = playerState;
        playerState = (playerState=="X") ? "O":"X";
        updateCurPlayer();
        displayGame();
    }
}

function displayGame (){
    boardDisplay.innerHTML = "";
    for(let x = 0; x < board.length; x++){
        for(let y = 0; y < board[0].length; y++){
            const boardButton = document.createElement('button');
            boardButton.classList = "gamebutton";
            boardButton.innerHTML = board[x][y];
            boardButton.addEventListener("click", (event) => {
                gameButtonClick(x,y);
                event.preventDefault();
            });
            boardDisplay.appendChild(boardButton);
        }
    }
}


updateCurPlayer();
displayGame();