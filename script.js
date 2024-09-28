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

function createElement(type, docInnerHtml, docClasslist, elementList){
    const newElement = document.createElement(type);
    newElement.innerHTML = docInnerHtml;
    newElement.classList = docClasslist;
    if(elementList.length > 0){appendElements(newElement, elementList)};
}

function appendElements(mainElement, elementList){
    for(let i = 0; i < elementList.length; i++){
        mainElement.appendChild(elementList[i]);
    }
}

function displayGame (){
    resetGameBoardDisplay();
    for(let x = 0; x < board.length; x++){
        for(let y = 0; y < board[0].length; y++){
            const newButton = (createElement('button', board[x][y], 'gamebutton', []));
            newButton.addEventListener("click", () => {
                gameButtonClick(x,y);
            });
            boardDisplay.appendChild(boardButton);
        }
    }
}

function displayPlayers(){
    const playerform = document.createElement('form');
    const labeltestA = (createElement('label', "Player1: ", '', []))
    const formatestA = (createElement('input', '', '', []));
    formatestA.type = "text";
    const labeltestB = (createElement('label', "Player2: ", '', []))
    const formatestB = (createElement('input', '', '', []));
    formatestB.type = "text";

    appendElements(playerform, [labeltestA, formatestA, labeltestB, formatestB]);
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

