// 9 spots, 2 players, board with spot and either blank or not blank
// 3 ways across to win, 3 ways down to win, 2 diagonals to win

const board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
let playerState = "X";
const boardDisplay = document.querySelector('.gameBoard');
const curplayer = document.querySelector('#gamestate');
console.table(board);


function checkWinner() {
    // if rows/cols/dia equal to each other, that player wins
    let win = false;
    let winPlayer = "";
    for(let x = 0; x < board.length; x++){
        if (board[x][0]==board[x][1] && board[x][1] == board[x][2] && board[x][2] == playerState) {
            winPlayer=board[x][0];
            win = true;
        }
        if (board[0][x]==board[1][x] && board[1][x]==board[2][x] && board[2][x]==playerState) {
            winPlayer=board[0][x];
            win = true;
        }
    }
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[2][2]==playerState){
        winPlayer = board[0][0];
        win=true;
    }
    if(board[2][0]==board[1][1] && board[1][1]==board[0][2] && board[0][2]==playerState){
        winPlayer = board[2][0];
        win=true;
    }
    if(win==true){
        const winPar = document.createElement('p');
        const playerStatement = playerState=="X"? "Player1  X" : "Player2 O";
        winPar.innerHTML = "Finished game, winner is " + playerStatement;
        boardDisplay.innerHTML = "";
        boardDisplay.appendChild(winPar);
    }
}

function updateCurPlayer(){
    const playerStatement = playerState=="X"? "Player1  X" : "Player2 O";
    curplayer.innerHTML = "Cur Player: " + playerStatement;
}

function gameButtonClick(x,y){
    // console.log(x, y);
    if (board[x][y]== " "){
        board[x][y] = playerState;
        displayGame();
        checkWinner();
        playerState = (playerState=="X") ? "O":"X";
        updateCurPlayer();
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