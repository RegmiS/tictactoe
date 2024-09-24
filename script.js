// 9 spots, 2 players, board with spot and either blank or not blank
// 3 ways across to win, 3 ways down to win, 2 diagonals to win

const board = [["X", " ", " "], [" ", " ", " "], [" ", " ", " "]];
const playerState = "X";
const boardDisplay = document.querySelector('.gameBoard');
console.table(board);
function displayGame (){
    for(let x = 0; x < board.length; x++){
        for(let y = 0; y < board[0].length; y++){
            const boardButton = document.createElement('button');
            boardButton.classList = "gamebutton";
            boardDisplay.appendChild(boardButton);
        }
    }
}

const curplayer = document.querySelector('#gamestate');


const playerStatement = playerState=="X"? "Player1  X" : "Player2 O";
curplayer.innerHTML = "Cur Player: " + playerStatement;

displayGame();