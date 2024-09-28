// 9 spots, 2 players, board with spot and either blank or not blank
// 3 ways across to win, 3 ways down to win, 2 diagonals to win

let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
let playerOne = "";
let playerTwo = "";
let playerState = "X";

const boardDisplay = document.querySelector('#game-board');
const curplayer = document.querySelector('#gamestate');
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset-button');
const playerinputs = document.querySelector('#player-control');


function checkWinner() {
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
        gamestate.innerHTML = "Finished game, winner is " + getCurPlayerStatement();
    }
}

function getCurPlayerStatement(){
    const playerStatement = playerState=="X"? playerOne + " X" : playerTwo + " O";
    return playerStatement;
}

function updateCurPlayer(){
    curplayer.innerHTML = "Cur Player: " + getCurPlayerStatement();
}

function swapPlayers(){
    playerState = (playerState=="X") ? "O":"X";
}

function gameButtonClick(x,y){
    if (board[x][y] == " "){
        board[x][y] = playerState;
        displayGame();
        checkWinner();
        swapPlayers();
        updateCurPlayer();
    }
}

function resetGameBoardDisplay(){
    boardDisplay.innerHTML = "";
}

function resetGameBoard(){
    resetGameBoardDisplay();
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    boardDisplay.classList = "";
}

function displayGame (){
    resetGameBoard();
    boardDisplay.classList = "gameBoard";
    for(let x = 0; x < board.length; x++){
        for(let y = 0; y < board[0].length; y++){
            const boardButton = document.createElement('button');
            boardButton.classList = "gamebutton";
            boardButton.innerHTML = board[x][y];
            boardButton.addEventListener("click", (event) => {
                gameButtonClick(x,y);
            });
            boardDisplay.appendChild(boardButton);
        }
    }
}

function displayPlayers(){
    const playerform = document.createElement('form');
    const labelA = document.createElement('label');
    labelA.innerHTML = "Player1: "
    const formA = document.createElement('input');
    formA.type = "text";
    const labelB = document.createElement('label');
    labelB.innerHTML = "Player2: "
    const formB = document.createElement('input');
    formB.type = "text";
    playerform.appendChild(labelA);
    playerform.appendChild(formA);
    playerform.appendChild(labelB);
    playerform.appendChild(formB);
    playerinputs.innerHTML = "";
    playerinputs.appendChild(playerform);
    return {formA, formB}
}

let gamestate;
let test;

test = displayPlayers();


startButton.addEventListener("click", () => {
    playerOne = test.formA.value;
    playerTwo = test.formB.value;
    updateCurPlayer();
    playerinputs.innerHTML = "";
    displayGame();
});

resetButton.addEventListener("click", () => {
    test = displayPlayers();
    playerState = "X";
});

